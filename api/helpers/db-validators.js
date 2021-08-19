const { response } = require('express')
const Datos = require('../models/datos')

// Verificar email
const emailExists = async( email = '' ) => {
  const existeEmail = await Datos.findOne({ email })
  if( existeEmail ) {
   throw new Error(`El correo: ${ email } ya existe`)
  }
}

module.exports = emailExists


