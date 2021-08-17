const { response } = require('express')
const path = require('path')

const getHorario = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/horarios.html'))
}

module.exports = getHorario