var Schema = require('mongoose').Schema

var resultado_schema = new Schema({
	nameEntidad: 	String,
	dateAplication:  { type:Date, default:Date.now() },
	content: 		Object
})

var Resultado = module.exports = resultado_schema