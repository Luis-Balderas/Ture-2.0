const joi = require('@hapi/joi');

const { eventIdSchema } = require('./events');
const { userIdSchema }  = require('./users');

const userEventIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserEventSchema = {
    userId: userIdSchema,
    eventId: eventIdSchema
};

module.exports = {
    userEventIdSchema,
    createUserEventSchema
}