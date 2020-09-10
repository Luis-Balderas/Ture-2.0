const joi = require('@hapi/joi');

const { eventIdSchema } = require('./events');
const { ticketIdSchema } = require('./tickets');

const ticketEventIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createTicketEventSchema = {
    ticketId: ticketIdSchema,
    eventId: eventIdSchema
};

module.exports = {
    ticketEventIdSchema,
    createTicketEventSchema
}