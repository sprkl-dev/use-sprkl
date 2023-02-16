const express = require('express');
const req = require('express/lib/request');
const route = require("./route")
const mongoose = require('mongoose');
const utils = require('./utils')

const app = express();
app.use(express.json());

const port = 3000;

//db connect
// console.log(process.env.MONGODB_URI );
mongoose.connect(`mongodb://${process.env.MONGO_HOST}/mern`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/metrics', async (req, res) => {
    const metrics = await utils.getMetrics();
    res.send({
        totalCounter : metrics.totalCounter,
        saturdaysCounter : metrics.saturdaysCounter
    });
})

app.post('/metrics', async (req, res) => {
    try {
        const metrics = {
            totalCounter: req.body.totalCounter,
            saturdaysCounter: req.body.saturdaysCounter
        }
        await utils.setMetrics(metrics);
        res.sendStatus(200);
    } catch (ex) {
        res.sendStatus(404);
    }
})

app.put('/updateMetrics', async (req, res) => {
    try {
        const metrics = await utils.retrieveMetrics();
        if (new Date().getDay() == 7) {
            metrics.saturdaysCounter++;
        } else {
            metrics.totalCounter++;
        }
        await utils.updateMetrics(metrics);
        res.sendStatus(200);
    } catch(ex) {
        res.status(401).send({ message: 'Failed updating metrics' + ex});
    }
});

app.get('/healthz', async (req, res) => {
    res.status(200);
    res.send("Ready");
})

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
});
