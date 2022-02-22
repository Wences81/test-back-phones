const { NotFound } = require('http-errors')

const phonesOperations = require('../../model/phones')

const getPhoneById = async (req, res) => {
    const { id } = req.params
    const result = await phonesOperations.getPhoneById(id)
    if (!result) {
        throw new NotFound(`Phone with id =${id} not found!`)
    }
    res.json({
        status: 'success',
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getPhoneById