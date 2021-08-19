const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server {
	
	constructor() {
		this.app = express()
		this.port = process.env.PORT
		
		// API
		this.api = '/api/contacto'
		
		// Static files
		this.error = '*'

		// db connection
		this.connectDB()

		// Middlewares
		this.middlewares()

		// Routes
		this.routes()
	}

	async connectDB() {
		await dbConnection()
	}

	middlewares() {

		this.app.use( cors() )
		
		// Public folder
		this.app.use( express.static('public') )
		
		// Body data
		this.app.use( express.json() )

	}

	routes() {
		
		// api
		this.app.use(this.api,require('../routes/api'))
		
		// static files
		this.app.use(this.error,require('../routes/404'))


	}

	listen() {
	
		this.app.listen(this.port, (req,res) => {
			console.log('Servidor corriendo en puerto', this.port)
		
		})
	}

}

module.exports = Server
