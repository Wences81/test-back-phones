const listPhones = require('./listPhones')

const getPhoneById = async (id) => {
    const phones = await listPhones()

    const result = phones.find(item => String(item.id) === String(id))
    if (!result) {
        return null
    }
    return result
}

module.exports = getPhoneById