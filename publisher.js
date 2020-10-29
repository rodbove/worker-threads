const redis = require('redis');
const publisher = redis.createClient();

const message = {
  id: process.env.TRIGGER_ID
}

publisher.publish('trigger', JSON.stringify(message), () => {
  process.exit(0);
});
