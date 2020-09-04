const sinon = require('sinon');

const { eventsMock, filteredEventsMock } = require('./events');

const getAllStub = sinon.stub();
getAllStub.withArgs('events').resolves(eventsMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('events', tagQuery).resolves(filteredEventsMock('Drama'));

const createStub = sinon.stub().resolves(eventsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};