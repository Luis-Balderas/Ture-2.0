const joi = require('@hapi/joi');

const ticketIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);


const ticketPriceSchema = joi.number().max(30000000);
const tiketOcupation = joi.number().max(20).min(1);



const createTicketSchema = {
    price: ticketPriceSchema,
    ocupation: tiketOcupation
}

const updateTicketSchema = {
    price: ticketPriceSchema,
    ocupation: tiketOcupation
}

module.exports = {
    ticketIdSchema,
    createTicketSchema,
    updateTicketSchema
}