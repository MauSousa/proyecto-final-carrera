const { response } = require('express')

const apiGet = (req, res) => {
  res.json({ msg: 'This is get from controller' })
}

const apiPost = (req, res) => {

	const { name, lastName, email } = req.body

  res.status(201).json(
		{ 
			msg: 'This is post from controller',
			name,
			lastName,
			email
		}
	)
}

module.exports = {
  apiGet,
  apiPost
}
