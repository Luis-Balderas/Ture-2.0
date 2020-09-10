const express = require('express');
const passport = require('passport');

const UserEventsService = require('../services/userEvents');
const validationHandler = require('../utils/middleware/validationHandler');

const { eventIdSchema } = require('../utils/schemas/events');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserEventSchema } = require('../utils/schemas/userEvents');



require('../utils/auth/strategies/jwt');

function userEventsApi(app) {
    const router = express.Router();
    app.use('/api/user-events', router);

    const userEventsService = new UserEventsService();

    router.get('/', 
    passport.authenticate('jwt', { session: false }),
    validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
        const { userId } = req.query;

        try {
          const userEvents = await userEventsService.getUserEvents({ userId });

          res.status(200).json({
              data: userEvents,
              message: 'user events listed'
          })
        } catch(error) {
            next(error);
        }
    }
  );

  router.post('/',
  passport.authenticate('jwt', { session: false }),
  validationHandler(createUserEventSchema),  
  async function(req, res, next) {
    const { body: userEvent } = req;

    try {
      const createdUserEventId = await userEventsService.createdUserEvent({
        userEvent
      });

      res.status(201).json({
        data: createdUserEventId,
        message: 'user event created'
      })
    } catch(err){
        next(err);
    }
  });

  router.delete('/:userEventId', 
  passport.authenticate('jwt', { session: false }),
  validationHandler({ userEventId: eventIdSchema }, 'params'),
  async function(req, res, next) {
    const { userEventId } = req.params;

    try {
      const deletedUserEventId = await userEventsService.deleteUserEvent({
        userEventId
      });

      res.status(200).json({
        data: deletedUserEventId,
        message: 'user event deleted'
      })
    }catch(error) {
      next(error)
    }
  })
}

module.exports = userEventsApi;