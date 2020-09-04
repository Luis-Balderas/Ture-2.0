const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const eventsApi = require('./routes/events.js');
const userEventsApi = require('./routes/userEvents.js')



const { 
  logErrors, 
  errorHandler,
  wrapErrors 
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());


authApi(app);
eventsApi(app);
userEventsApi(app);


app.use(notFoundHandler);


//Errores middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
  });