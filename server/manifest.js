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
        }
    },
    register: {
        plugins: [
            {
                plugin: '../lib', // Main plugin
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
