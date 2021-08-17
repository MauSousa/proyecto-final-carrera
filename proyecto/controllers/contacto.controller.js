const { response } = require('express')
const path = require('path')

const getContacto = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contacto.html'))
}

module.exports = getContacto