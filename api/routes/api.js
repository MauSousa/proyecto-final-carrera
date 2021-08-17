const { Router } = require('express')
const { apiGet, apiPost } = require('../controllers/api.controller')

const router = Router()


// api
router.get('/', apiGet)

router.post('/', apiPost)

module.exports = router
