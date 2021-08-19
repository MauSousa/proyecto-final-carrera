const { Router } = require('express')
const { check } = require('express-validator')
const { apiGet, apiPost } = require('../controllers/api.controller')
const emailExists = require('../helpers/db-validators')

const router = Router()


// api
router.get('/', apiGet)

router.post('/', [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('lastName', 'El apellido es obligatorio').not().isEmpty(),
  check('email').custom(emailExists)
], apiPost)

module.exports = router
