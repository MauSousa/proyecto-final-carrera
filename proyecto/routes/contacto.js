const { Router } = require('express')
const getContacto = require('../controllers/contacto.controller')

const router = Router()

// static files
router.get('/', getContacto)

module.exports = router
