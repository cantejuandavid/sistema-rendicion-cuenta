var Schema = require('mongoose').Schema

var entidad_schema = new Schema({
	type: 			String,
	name: 			String,
	updated: 		{ type: Date, default: Date.now }
})

var Entidad = module.exports = entidad_schema