const express = require('express');

const TicketEventsService = require('../services/ticketEvent');
const validationHandler = require('../utils/middleware/validationHandler');

const { ticketIdSchema } = require('../utils/schemas/tickets');
const { eventIdSchema } = require('../utils/schemas/events');
const {  createTicketEventSchema } = require('../utils/schemas/ticketsEvents');


function ticketEventsApi(app) {
   const router = express.Router();
   app.use('/api/ticket-events', router);

    const ticketEventsService = new TicketEventsService();

    router.get('/', 
      validationHandler({ eventId: eventIdSchema }, 'query'),
      async function(req, res, next) {
          const { ticketId } = req.query;

          try{
              const ticketEvents = await ticketEventsService.getTikectEvents({ ticketId });

              res.status(200).json({
                  data: ticketEvents,
                  message: 'ticket events listed'
              })
          }catch(error){
              next(error);
          }
      }
    );
    
    router.post('/',
    validationHandler(createTicketEventSchema),
      async function(req, res, next) {
          const { body: ticketEvent } = req;

          try{
              const createdTicketEventId = await UserEventsService.createdTicketEventId({ ticketEvent });

              res.status(201).json({
                  date: createdTicketEventId,
                  message: 'ticket event created'
              })
          }catch(err){
              next(err);
          }
      }
    );

    router.delete('/:ticketEventId',
    validationHandler({ ticketEventId: ticketIdSchema }, 'params'),
      async function(req, res, next) {
          const { ticketEventId } = req.params;

          try{
              const deleteTicketEventId = await ticketEventsService.deleteTicketEvent({ ticketEventId });

              res.status(200).json({
                  data: deleteTicketEventId,
                  message: 'ticket event deleted'
              })
          }catch(error) {
              next(error)
          }
      }
    )
}


module.exports = ticketEventsApi;