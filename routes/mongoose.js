var mongoose = require('mongoose')
var db = 'mongodb://localhost/lista-chequeo'
var dbb ='mongodb://rooter:juandavid123@ds035750.mongolab.com:35750/lista-chequeo'
var db = module.exports = mongoose.connect(dbb)


mongoose.connection.on('error', function(err) {	
	console.log('Ha ocurrido un error.')
	console.log(err)
})

mongoose.connection.on('connected', function(e) {
	console.log('->Conexión establecida con Exito!')	
})