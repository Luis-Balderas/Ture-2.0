const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { eventsMock } = require('../utils/mocks/events');

describe('services - events', function() {
  const EventsServices = proxyquire('../services/events', {
    '../lib/mongo': MongoLibMock
  });

  const eventsService = new EventsServices();

  describe('when getEvents method is called', async function() {
    it('should call the getall MongoLib method', async function() {
      await eventsService.getEvents({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of event', async function() {
      const result = await eventsService.getEvents({});
      const expected = eventsMock;
      assert.deepEqual(result, expected);
    });
  });
});