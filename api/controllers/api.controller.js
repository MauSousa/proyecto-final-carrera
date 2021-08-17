const { response } = require('express')

const apiGet = (req, res) => {
  res.json({ msg: 'This is get from controller' })
}

const apiPost = (req, res) => {
  res.status(201).json({ msg: 'This is post from controller' })
}

module.exports = {
  apiGet,
  apiPost
}
