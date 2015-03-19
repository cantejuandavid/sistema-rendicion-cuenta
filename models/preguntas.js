var Schema = require('mongoose').Schema

var pregunta_schema = new Schema({
	type: 			String,
	question: 		String,
	ValueDefault: 	{ type: String, default: 'na' }
})

var Pregunta = module.exports = pregunta_schema