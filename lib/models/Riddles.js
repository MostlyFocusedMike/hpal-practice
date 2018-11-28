'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

// Schwifty models are based on Objection's, but outfitted to use Joi

// Make sure to update "ModelName" to your model's name—
// this is how you will reference it throughout your application.
// module.exports = class ModelName extends Schwifty.Model {

module.exports = class Riddles extends Schwifty.Model {

    static get tableName() {

        return 'Riddles';
    }

    static get joiSchema() {
        // Here we'll define a joi schema to describe a valid Riddle.
        // Schwifty will then use this to ensure that the data we try to use
        // to create/update our riddles complies with our definition of a Riddle.

        return Joi.object({
            id: Joi.number().integer(),
            slug: Joi.string(),
            question: Joi.string(),
            answer: Joi.string()
        });
    }
};
