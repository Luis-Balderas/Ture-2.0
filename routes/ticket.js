const express = require('express');
const TicketsService = require('../services/ticket');

const validationHandler = require('../utils/middleware/validationHandler');

const {  
    ticketIdSchema,
    createTicketSchema,
    updateTicketSchema
 } = require('../utils/schemas/tickets');


function ticketsApi(app) {
    const router = express.Router();
    app.use('/api/tickets', router);

    const  ticketsService = new TicketsService();

    router.get('/', 
     async function(req, res, next) {
         const { tags } = req.query;
         try {
            const tickets = await ticketsService.getTickets({ tags });

            res.status(200).json({
              data: tickets, 
              message: 'Ticket listed'
            });
        }catch(err) {
            next(err);
        } 
     });

     router.get('/:ticketId', 
     validationHandler( { ticketId: ticketIdSchema,}, 'params'),
       async function(req, res, next) {
           const { ticketId } = req.params;
           try{
               const ticket = await ticketsService.getTicket({ ticketId});

               res.status(200).json({
                   data: ticket,
                   massege: 'Ticket retrive',
               })
           } catch(err) {
               next(err);
           }
       }
    );

    router.post('/',
    validationHandler(createTicketSchema),
      async function(req, res, next) {
          const { body: ticket } = req;
          console.log(ticket)
          try{
              const createdTicketId = await ticketsService.createTicket({ticket});
            console.log(createdTicketId)
              res.status(201).json({
                  data: createdTicketId,
                  massage: 'Ticket created'
              });
          }catch(err) {
              next(errr);
          }
        
      }
    );

    router.put('/:ticketId',
    validationHandler( { ticketId: ticketIdSchema,}, 'params'),
    validationHandler(updateTicketSchema),
    async function(req, res, next) {
        const { body: ticket } = req;
        const { ticketId } = req.params;
        try{
            const updatedTicketId = await ticketsService.updateTicket( ticket, ticketId );

            res.status(200).json({
                data: updatedTicketId,
                massage: 'Ticket  updated'
            });
        }catch(err) {
            next(errr);
        }
    }
  );
  router.delete('/:ticketId',
  validationHandler( { ticketId: ticketIdSchema,}, 'params'),
  async function(req, res, next) {
      const { ticketId } = req.params;
      try{
          const deleteTicketId = await ticketsService.deleteTicket( ticket, ticketId );

          res.status(200).json({
              data: deleteTicketId,
              massage: 'Ticket  deleted'
          });
      }catch(err) {
          next(errr);
      }
  }
);
}

module.exports = ticketsApi;