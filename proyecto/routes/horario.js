const { Router } = require('express')
const path = require('path')
const getHorario = require('../controllers/horario.controller')

const router = Router()

router.get('/', getHorario)

module.exports = router