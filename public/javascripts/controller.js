lista.controller('principal', function($scope, $location) {

})

lista.controller('formularioTODOS', function($scope, $location, $http, $route) {
	$http.get('/data/questions/todos').success(function(data) {$scope.questions = data})
	$http.get('/data/entidades').success(function(data) {$scope.entidades = data})

	var form = document.getElementById('todos')
	var empty = 0

	form.addEventListener('submit', function(e) {
		e.preventDefault();				
		var l = $(this).find('.respuesta').length		
		$(this).find('input:radio:checked').length < l ? empty = 0 : empty = 1;
        if(empty==0)
        	swal("Oops!", "Por favor contesta todas las preguntas!", "error");
        else {
			var o = $(this).serializeObject()
			var e = o.entidad;
			delete o.entidad;
			var res = {
				nameEntidad: e,
				content: 	o
			}
			$http.post('/storing/resultado', res).success(function(data) {
				sweetAlert({
					title: "Registrado!", 
					text: "La revisión de cuentas ha sido exitosamente guardada!", 
					type: "success"
				}, function() {
					$route.reload()
				});
				
			})			
		}
	})
})

lista.controller('formularioET', function($scope, $location, $http) {
	$('#mytabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})	

	$http.get('/data/questions/et').success(function(data) {$scope.questions = data})
	$http.get('/data/questions/anexos1-et').success(function(data) {$scope.anexo_1 = data})
	$http.get('/data/questions/anexos2-et').success(function(data) {$scope.anexo_2 = data})
	$http.get('/data/questions/anexos3-et').success(function(data) {$scope.anexo_3 = data})

	$http.get('/data/entidades/et').success(function(data) {$scope.entidades = data})
})

lista.controller('formularioESP', function($scope, $location, $http) {

	$('#mytabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$http.get('/data/questions/esp').success(function(data) {$scope.questions = data})
	$http.get('/data/questions/anexos1-esp').success(function(data) {$scope.anexo_1 = data})
	$http.get('/data/questions/anexos2-esp').success(function(data) {$scope.anexo_2 = data})

	$http.get('/data/entidades/esp').success(function(data) {$scope.entidades = data})
		
	// var form = document.getElementById('esp')

	// form.addEventListener('submit', function(e) {
	// 	e.preventDefault();
	// 	console.log('submit')
	// })
})

lista.controller('formularioED', function($scope, $location, $http) {

	$('#mytabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$http.get('/data/questions/ed').success(function(data) {$scope.questions = data})
	$http.get('/data/questions/anexos1-ed').success(function(data) {$scope.anexo_1 = data})
	$http.get('/data/questions/anexos2-ed').success(function(data) {$scope.anexo_2 = data})

	$http.get('/data/entidades/ed').success(function(data) {$scope.entidades = data})
		
	// var form = document.getElementById('esp')

	// form.addEventListener('submit', function(e) {
	// 	e.preventDefault();
	// 	console.log('submit')
	// })
})

lista.controller('formularioCP', function($scope, $location, $http) {

	$('#mytabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$http.get('/data/questions/cp').success(function(data) {$scope.questions = data})
	$http.get('/data/questions/anexos1-cp').success(function(data) {$scope.anexo_1 = data})
	$http.get('/data/questions/anexos2-cp').success(function(data) {$scope.anexo_2 = data})

	$http.get('/data/entidades/cp').success(function(data) {$scope.entidades = data})
		
	// var form = document.getElementById('esp')

	// form.addEventListener('submit', function(e) {
	// 	e.preventDefault();
	// 	console.log('submit')
	// })
})

lista.controller('formularioESE', function($scope, $location, $http) {

	$('#mytabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$http.get('/data/questions/esestado').success(function(data) {$scope.questions = data})
	$http.get('/data/questions/anexos1-esestado').success(function(data) {$scope.anexo_1 = data})
	$http.get('/data/questions/anexos2-esestado').success(function(data) {$scope.anexo_2 = data})

	$http.get('/data/entidades/esestado').success(function(data) {$scope.entidades = data})
		
	// var form = document.getElementById('esp')

	// form.addEventListener('submit', function(e) {
	// 	e.preventDefault();
	// 	console.log('submit')
	// })
})

lista.controller('formularioESESP', function($scope, $location, $http) {

	$('#mytabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$http.get('/data/questions/esespeciales').success(function(data) {$scope.questions = data})
	$http.get('/data/questions/anexos1-esespeciales').success(function(data) {$scope.anexo_1 = data})
	$http.get('/data/questions/anexos2-esespeciales').success(function(data) {$scope.anexo_2 = data})

	$http.get('/data/entidades/esespeciales').success(function(data) {$scope.entidades = data})
		
	// var form = document.getElementById('esp')

	// form.addEventListener('submit', function(e) {
	// 	e.preventDefault();
	// 	console.log('submit')
	// })
})

lista.controller('verres', function($scope, $location) {
	PDFJS.workerSrc = 'plugins/pdfjs/src/worker_loader.js';
	renderPDF('files/RESOLUCION230.pdf', document.getElementById('holder'));
	function renderPDF(url, canvasContainer, options) {

	    var options = options || { scale: 1 };
	        
	    function renderPage(page) {
	        var viewport = page.getViewport(options.scale);
	        var canvas = document.createElement('canvas');
	        var ctx = canvas.getContext('2d');
	        var renderContext = {
	          canvasContext: ctx,
	          viewport: viewport
	        };
	        
	        canvas.height = viewport.height;
	        canvas.width = viewport.width;

	        canvasContainer.appendChild(canvas);
	        
	        page.render(renderContext);
	    }
	    
	    function renderPages(pdfDoc) {
	        for(var num = 1; num <= pdfDoc.numPages; num++)
	            pdfDoc.getPage(num).then(renderPage);
	    }

	    
	    PDFJS.getDocument(url).then(renderPages);

	} 

});

lista.controller('create_question', function($scope,$route, $http, $location) {
	var form = document.getElementById('createQuestion')
	form.addEventListener('submit', function(evt) {

		evt.preventDefault();
		$http.post('/storing/question', 
			{
				type: document.getElementById('type').value,
				question: document.getElementById('question').value
			}).
			success(function(data, status, headers, config) {
				form.reset()
				$location.path('/registrar_question');
			}).
			error(function(data, status, headers, config) {
				console.log(data)
			});
	});
})

lista.controller('create_entidad', function($scope,$route, $http, $location) {
	var form = document.getElementById('createEntidad')
	form.addEventListener('submit', function(evt) {

		evt.preventDefault();
		$http.post('/storing/entidad', 
			{
				name: document.getElementById('name').value,
				type: document.getElementById('type').value
			}).
			success(function(data, status, headers, config) {
				form.reset()
				$location.path('/');
			}).
			error(function(data, status, headers, config) {
				console.log(data)
			});
	});
})

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
           console.log(o[this.name])
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};