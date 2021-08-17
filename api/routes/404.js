const { Router } = require('express')
const displayError = require('../controllers/404.controller')

const router = Router()

router.get('*', displayError)

module.exports = router