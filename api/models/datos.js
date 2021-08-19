
const { Schema, model } = require('mongoose')

const datosSchema = Schema({
	name: {
		type: String,
		required: [true, 'El nombre es obligatorio']
	},
	lastName: {
		type: String,
		required: [true, 'El apellido es obligatorio']
	},
	email: {
		type: String,
		required: [true, 'El correo es obligatorio'],
		unique: true
	}
})

module.exports = model('Datos', datosSchema)

