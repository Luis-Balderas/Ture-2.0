const MongoLib = require('../lib/mongo');

class TicketsService {
 constructor() {
  this.collection = 'ticket';
  this.mongoDB = new MongoLib();
 }
 async getTickets({ tags }) {
  const query = tags && {
   tags: {
    $in: tags,
   },
  };

  const tickets = await this.mongoDB.getAll(this.collection, query);
  return tickets || [];
 }

 async getTicket({ ticketId }) {
  const ticket = await this.mongoDB.get(this.collection, ticketId);
  return ticket || {};
 }

 async createTicket({ ticket }) {
  const newTicket = {
   ...ticket,
   createdAt: Date.now(),
  };
  const createTicketId = await this.mongoDB.create(this.collection, newTicket);
  return createTicketId;
 }

 async updateticket({ ticketId, ticket }) {
  const updatedticketId = await this.mongoDB.update(
   this.collection,
   ticketId,
   ticket
  );
  return updatedticketId;
 }

 async deleteTecket(ticketId) {
  const deleteTecketId = await this.mongoDB.delete(this.collection, ticketId);
  return deleteTecketId;
 }
}

module.exports = TicketsService;
