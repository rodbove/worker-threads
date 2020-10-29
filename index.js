const { Worker } = require('worker_threads');

for (let i = 1; i <= 4; i++) {
  const worker = new Worker('./subscriberWorker.js', { workerData: i });
  worker.on('exit', () => {
    console.log(`Worker ${i} stopped`);
  });
}
