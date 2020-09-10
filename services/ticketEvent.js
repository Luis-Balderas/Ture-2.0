const MongoLib = require('../lib/mongo');

class TicketEventsService {
    constructor() {
        this.collection = 'ticket-events';
        this.mongoDB = new MongoLib();
    }

    async getTikectEvents({ ticketId }) {
        const query = ticketId && { ticketId };
        const ticketEvents = await this.mongoDB.getAll(this.collection, query);

        return ticketEvents || [];
    }

    async createTikectEvents({ ticketEvent }) {
        const createdTicketEventId = await this.mongoDB.create(this.collection, ticketEvent);

        return createdTicketEventId;
    }

    async deleteUserEvent({ ticketEventId }) {
        const deleteTicketEventId = await this.mongoDB.delete(this.collection, ticketEventId);

        return deleteTicketEventId;
    }
}

module.exports = TicketEventsService;