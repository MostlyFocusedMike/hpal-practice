'use strict';

const Boom = require('boom');
const Joi = require('joi');
const Toys = require('toys');

module.exports = {
    method: 'get',
    path: '/api/v1/',
    options: {
        tags: [
            'api',
            ''
        ],
        description: 'Does a thing',
        handler: async (request) => {
            const { Database } = request.server.app;
        }
    }
};
