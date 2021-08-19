const { response } = require('express')
const path = require('path')
const Datos = require('../models/datos')

const apiGet = (req, res) => {
  res.json( {Message: 'Acceso Denegado'} )
}

const apiPost = async(req, res) => {
	
	const { name, lastName, email } = req.body
	const datos = new Datos({ name, lastName, email })
	
	// Verificar email
	const emailExists = await Datos.findOne({ email })
	if( emailExists ) {
		return res.status(400).json({
			error: 'El correo ya existe'
		})
	}

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
