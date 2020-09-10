const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const eventsApi = require('./routes/events.js');
const userEventsApi = require('./routes/userEvents.js');
const ticketApi = require('./routes/ticket.js');
const payment = require('./routes/payment.js');

const {
 logErrors,
 errorHandler,
 wrapErrors,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

authApi(app);
eventsApi(app);
userEventsApi(app);
ticketApi(app);
payment(app);

app.use(notFoundHandler);

//Errores middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
 console.log(`Listening http://localhost:${config.port}`);
});
