const phonesOperations = require('../../model/phones')

const listPhones = async (req, res) => {
    const phones = await phonesOperations.listPhones()
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: phones
        }
    })
}

module.exports = listPhones