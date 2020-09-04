// DEBUG=app:* node scripts/mongo/seedEvents.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:event');
const MongoLib = require('../../lib/mongo');
const { eventsMock } = require('../../utils/mocks/events');


async function seedEvents() {
  try {
    const mongoDB = new MongoLib();

    const promises = eventsMock.map(async event => {
      await mongoDB.create('events', event);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} events have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedEvents();