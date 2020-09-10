const MongoLib = require('../lib/mongo');


class UserEventsService {
    constructor() {
        this.collection = 'user-events';
        this.mongoDB = new MongoLib();
    }

    async getUserEvents({ userId }) {
      const query = userId && { userId };
      const userEvents = await this.mongoDB.getAll(this.collection, query);

      return userEvents || [];
    }

    async createUserEvent({ userEvent }) {
      const createdUserEventId = await this.mongoDB.create(this.collection, userEvent);
      
      return createdUserEventId;
    }

    async deleteUserEvent({ userEventId }) {
        const deletedUserEventId = await this.mongoDB.delete(this.collection, userEventId);

        return deletedUserEventId;
    } 
}

module.exports = UserEventsService;