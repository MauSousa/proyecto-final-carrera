const { Router } = require('express')
const path = require('path')
const getPagos = require('../controllers/pagos.controller')

const router = Router()

router.get('/', getPagos)

module.exports = router
