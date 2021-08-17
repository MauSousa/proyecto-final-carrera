const { response } = require('express')
const path = require('path')

const getPagos = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pago.html'))
}

module.exports = getPagos