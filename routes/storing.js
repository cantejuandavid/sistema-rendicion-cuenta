var express = require('express');
var router = express.Router();
var db = require('./mongoose')

var resultado_schema = require('../models/resultados')
var Resultado = db.model('resultado', resultado_schema)
var entidad_schema = require('../models/entidades')
var Entidad = db.model('entidades', entidad_schema)
	
var pregunta_schema = require('../models/preguntas')
var Pregunta = db.model('pregunta', pregunta_schema)

router.post('/resultado', function(req, res) {
	Resultado.create(req.body)
	res.send()
})

router.post('/:instance', function(req, res) {
	var i = req.params.instance
	if(i == 'question'){
		Pregunta.create(req.body)
		res.send();
	}
	else{
		Entidad.create(req.body)
		res.send();
	}	
})





module.exports = router;
