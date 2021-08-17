const { response } = require('express')
const path = require('path')

const displayError = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'))
}

module.exports = displayError