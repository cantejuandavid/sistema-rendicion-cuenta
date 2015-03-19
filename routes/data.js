var express = require('express');
var router = express.Router();
var db =  require('./mongoose')

var entidad_schema = require('../models/entidades')
var Entidad = db.model('entidades', entidad_schema)

var pregunta_schema = require('../models/preguntas')
var Pregunta = db.model('pregunta', pregunta_schema)

var resultado_schema = require('../models/resultados')
var Resultado = db.model('resutado', resultado_schema)

router.get('/entidades/:sort?', function(req, res, next) {
	var query = Entidad.find({})
	if(req.params.sort) {
		var val = req.params.sort
		query = Entidad.find({ 'type': val })
	}

	query.exec(function(err, doc){
		if(err) console.log(err)
		res.json(doc)
	});
});

router.get('/questions/:type', function(req, res, next) {
	var query = Pregunta.find({ 'type': req.params.type })

	query.exec(function(err, doc){
		if(err) console.log(err)
		res.json(doc)
	});
});


module.exports = router
