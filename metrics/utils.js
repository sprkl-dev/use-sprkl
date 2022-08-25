const Metrics = require('./models/metric')
const data = require('./seed');
const axios = require('axios');
const http = require('http')

let seeded = false;

async function seed() {
    if (!seeded) {
        //console.log("Seeding")
        await Metrics.insertMany(data.metrics)
        seeded = true;
    }
}

async function getMetrics() {
    await seed();

    const current = await Metrics.findOne();
    return current;
}

async function setMetrics(metrics) {
    await seed();

    const current = await Metrics.updateOne(metrics);
    return current;
}

const metricsURL = "http://metrics:3000"

async function retrieveMetrics() {
    await new Promise(resolve => setTimeout(resolve, 5));
   const res = await axios.get(`${metricsURL}/metrics`);
   return res;
}

async function updateMetrics(metrics) {
    const res = await axios.post(`${metricsURL}/metrics`, metrics)
}

module.exports.getMetrics = getMetrics;
module.exports.setMetrics = setMetrics;
module.exports.retrieveMetrics = retrieveMetrics;
module.exports.updateMetrics = updateMetrics;
