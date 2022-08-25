const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

const { createClient } = require('redis');
const { promisify } = require('util');

const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT ?? 6379;
const redisURL = `redis://${redisHost}:${redisPort}`
const client = createClient({url: redisURL});
client.on('error', (err) => console.log('Redis Client Error', err));
const clientSet = promisify(client.set).bind(client);
const clientGet = promisify(client.get).bind(client);
const clientKeys = promisify(client.keys).bind(client);

const {getCatalog} = require(`./catalog`)

async function bootstrap() {
  app.listen(port, () => {
    console.log(`catalog server is listening on port ${port}`)
  })
}

app.get('/catalog', async (req, res) => {
  console.log('GET /catalog')
  res.send(await getCatalog());
})

app.get('/healthz', async (req, res) => {
  res.status(200)
  res.send("Ready");
})

bootstrap();

