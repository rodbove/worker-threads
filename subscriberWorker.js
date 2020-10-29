const { worker } = require('cluster');
const redis = require('redis');
const { workerData } = require('worker_threads');
const subscriber = redis.createClient();

console.log(`Worker ${workerData} started`);
setInterval(() => console.log(`Worker ${workerData} still running`), 5000);

subscriber.on('message', (channel, message) => {
  const trigger = JSON.parse(message);
  if (parseInt(trigger.id) === workerData) {
    process.exit();
  }
});

subscriber.subscribe('trigger');
