const fs = require('fs').promises

const phonesPath = require('./phonesPath')

const listPhones = async () => {
    const data = await fs.readFile(phonesPath, 'utf8')
    return JSON.parse(data)
}

module.exports = listPhones