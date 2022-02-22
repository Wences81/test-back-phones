const express = require('express')

const { ctrlWrapper } = require('../../middlewares')

const { phones: ctrl } = require('../../controllers')


const router = express.Router()

router.get('/', ctrlWrapper(ctrl.listPhones))

router.get('/:id', ctrlWrapper(ctrl.getPhoneById))


module.exports = router