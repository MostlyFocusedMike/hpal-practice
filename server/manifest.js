'use strict';

const Dotenv = require('dotenv');
const Confidence = require('confidence');
const Toys = require('toys');

// Pull .env into process.env
Dotenv.config({ path: `${__dirname}/.env` }); // we need the filepath since .env isn't in the root of the file

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3100,
        debug: {
            $filter: 'NODE_ENV', // Filter checks what your env is, and then uses it as a key.
            development: { // So when the env is set to development, we'll do the following:
                log: ['error', 'implementation', 'internal'],
                request: ['error', 'implementation', 'internal']
            }
        },
        routes: {
            cors: {
                $filter: 'NODE_ENV',
                development: true
            }
        }
    },
    register: {
        plugins: [
            {
                plugin: '../lib', // Main plugin
                options: {}
            },
            {
                plugin: 'schwifty',
                options: {
                    $filter: 'NODE_ENV',
                    $default: {},
                    $base: {
                        migrateOnStart: true,
                        knex: {
                            client: 'sqlite3',
                            useNullAsDefault: true,         // Suggested for sqlite3
                            pool: {
                                idleTimeoutMillis: Infinity // Handles knex v0.12/0.13 misconfiguration when using sqlite3 (tgriesser/knex#1701)
                            },
                            connection: {
                                // :memory: means that our DB will only exist while the server is running,
                                // it is in-memory only, so it will be destroyed when the server shuts down,
                                // this is fine for a toy app
                                // filename: ':memory:'
                                filename: './db/riddles.db'
                            }
                        }
                    },
                    production: {
                        migrateOnStart: false
                    }
                }
            },
            {
                plugin: './plugins/swagger',
                options: {}
            },
            {
                plugin: {
                    $filter: 'NODE_ENV',
                    $default: 'hpal-debug',
                    production: Toys.noop
                }
            }
        ]
    }
});
