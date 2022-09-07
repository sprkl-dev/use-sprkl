const fastify = require('fastify')({ logger: { level: 'trace' } })
const crypto = require('crypto')
const {MongoClient} = require('mongodb');
const {default: axios} = require('axios');
const {getTotalPrice, pay} = require("./orders");

const mongoHost = process.env.MONGO_HOST
const mongoPort = process.env.MONGO_PORT ?? 27017
const mongoClient = new MongoClient(`mongodb://${mongoHost}:${mongoPort}/orders`)
let ordersCollection;

const paymentsURL = process.env.PAYMENTS_URL
const catalogURL = process.env.CATALOG_URL
const metricsURL = process.env.METRICS_URL

async function bootstap() {
  try {
    await mongoClient.connect();
    ordersCollection = mongoClient.db('orders').collection('orders');
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)  
  }
}


fastify.post('/orders', async function (request, reply) {
    const { items } = request.body;
    const order = { id: crypto.randomUUID(), items: items, state: 'pre-validation' }
    if (!Array.isArray(items) || items.some(item => typeof item !== 'string')) {
      order.state = 'invalid'
      ordersCollection.insertOne(order);
      reply.send(order.state).code(400);
       return;
    }
    const totalPrice = await getTotalPrice(items)
    console.log(totalPrice)
    if (totalPrice < 0) {
      order.state = 'invalid'
      ordersCollection.insertOne(order);
      reply.send(order.state).code(400);
      return;
    }
    order.state = 'pre-payment'
    if (!(await pay({amount: totalPrice, orderId: order.id}))) {
      order.state = 'payment-failed'
      ordersCollection.insertOne(order);
      reply.send(order.state).code(400);
     return;
    }
    order.state = 'landed'
    ordersCollection.insertOne(order);
    reply.send(order.state).code(200);
    await axios.put('http://metrics:3000/updateMetrics')
  })

fastify.get('/orders', async function (request, reply) {
  const orders = [];
  const cursor = await ordersCollection.find()
  await cursor.forEach((order) => orders.push(order))
  reply.send(orders).code(200);
})


fastify.get('/healthz', async function(request, reply) {
  try {
    await axios.get(`${catalogURL}/healthz`)
    await axios.get(`${paymentsURL}/healthz`)
    return reply.send("Ready").code(200);
  } catch (ex) {
    reply.send("Failed checking catalog & payments").code(400)
  }
})

bootstap()
