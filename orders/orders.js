const fastify = require('fastify')({ logger: { level: 'trace' } })
const crypto = require('crypto')
const {default: axios} = require('axios');

const paymentsURL = process.env.PAYMENTS_URL
const catalogURL = process.env.CATALOG_URL

async function pay({amount, orderId}) {
    try {
        await axios.post(`${paymentsURL}/payments`, { amount, orderId })
        return true
    } catch(e) {
        fastify.log.error(e)
        return false
    }
}

async function getTotalPrice(itemNames) {
    try {
        const catalog = await (await axios.get(`${catalogURL}/catalog`)).data
        console.log(catalog);
        const itemPriceByName = new Map();
        const itemPriceById = new Map();
        for (const item of catalog) {
            itemPriceByName.set(item.name, item.price)
            itemPriceById.set(item.id, item.price)
        }
        let totalPrice = 0;
        for (const item of itemNames) {
            if (itemPriceByName.has(item)) {
                totalPrice += itemPriceByName.get(item)
            } else if (itemPriceById.has(item)){
                totalPrice += itemPriceById.get(item)
            } else {
                fastify.log.error({item: item, msg: 'failed to find an item'})
                return -1;
            }
        }
        return totalPrice
    } catch(e) {
        fastify.log.error(e)
        return -1;
    }
}

module.exports = {
    pay, getTotalPrice
}