const assert = require('assert');
const proxyquire = require('proxyquire');

const { eventsMack, EventsServiceMock } = require('../utils/mocks/events.js');
const testServer = require('../utils/testServer');

describe('routes - events', function() {
    const route = proxyquire('../routes/events', {
        '../services/events': EventsServiceMock
    });

    const request = testServer(route);
    describe('GET /events', function() {
       it('should respond with status 200', function(done){
           request.get('/api/events').expect(200, done);
       })
    })
})
