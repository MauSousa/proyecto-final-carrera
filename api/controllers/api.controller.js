const { response } = require('express')
const { validationResult } = require('express-validator')
const path = require('path')
const Datos = require('../models/datos')

const apiGet = (req, res) => {
  res.json( {Message: 'Acceso Denegado'} )
}

const apiPost = async(req, res) => {

	const errors = validationResult(req)

	if( !errors.isEmpty() ) {
		return res.status(400).json(errors)
	}
	
	const { name, lastName, email } = req.body
	const datos = new Datos({ name, lastName, email })
	
	

	await datos.save()

  res.status(201).json(
		{ 
			datos
		}
	)
}

module.exports = {
  apiGet,
  apiPost
}
