const utils = require('./utils') 


module.exports.increment = async function increment() {
    try {
        const current = await utils.retrieveMetrics();
        if (new Date().getDay() == 7) {
            current.saturdaysCounter++;
        } else {
            curent.totalCounter++;
        }
    } catch(ex) { }
}



