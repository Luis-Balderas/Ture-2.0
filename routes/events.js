const express = require('express');
const passport = require('passport');
const EventsService = require('../services/event')

const {
    eventIdSchema,
    createEventSchema,
    updateEventSchema
} = require('../utils/schemas/events');

const validationHandler = require('../utils/middleware/validationHandler');

require('../utils/auth/strategies/jwt');

function eventsApi(app) {
    const router = express.Router();
    app.use("/api/events", router)
    
    const eventsService = new EventsService();

    router.get("/", 
    passport.authenticate('jwt', { session: false }),
    async function(req, res, next){
       const { tags } = req.query;
       try{
          const events = await eventsService.getEvents({ tags });

          res.status(200).json({
              data: events,
              message: 'Event listed'
          });
       }catch(err) {
           next(err);
       }
    });

    router.get('/:eventId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ eventId: eventIdSchema }, 'params'),
     async function(req, res, next){
        const { eventId } = req.params;
        try{
           const event = await eventsService.getEvent({ eventId });
 
           res.status(200).json({
               data: event,
               message: 'Event retrieve'
           });
        }catch(err) {
            next(err);
        }
     });

     router.post("/", 
     passport.authenticate('jwt', { session: false }),
     validationHandler(createEventSchema),
     async function(req, res, next){
        const { body: event } = req;
        try{
           const createdEventId = await eventsService.createEvent({ event });
 
           res.status(200).json({
               data: createdEventId,
               message: 'Event created'
           });
        }catch(err) {
            next(err);
        }
     });

     router.put("/:eventId", 
     passport.authenticate('jwt', { session: false }),
     validationHandler({ eventId: eventIdSchema }, 'params'),
     validationHandler(updateEventSchema),
     async function(req, res, next){
        const { body: event } = req;
        const { eventId } = req.params;
        try{
           const updatedEventId = await eventsService.updateEvent({ eventId, event });
 
           res.status(200).json({
               data: updatedEventId,
               message: 'Event updated'
           });
        }catch(err) {
            next(err);
        }
     });

     router.delete("/:eventId",
     passport.authenticate('jwt', { session: false }),
     validationHandler({ eventId: eventIdSchema }, 'params'),
     async function(req, res, next){
        const { eventId } = req.params;
        try{
           const deletedEventId = await eventsService.deleteEvent({ eventId });
 
           res.status(200).json({
               data: deletedEventId,
               message: 'Event deleted'
           });
        }catch(err) {
            next(err);
        }
     });
}

module.exports = eventsApi;