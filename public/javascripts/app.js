var lista = angular.module('listaChequeoApp', ['ngRoute']);

lista.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {		
		$routeProvider.
			when('/', {
				templateUrl:'templates/todos.html',
				controller: 'principal'
			}).
			when('/todos', {
				templateUrl:'templates/todos.html',
				controller: 'formularioTODOS'
			}).
			when('/et', {
				templateUrl: 'templates/et.html',
				controller: 'formularioET'
			}).
			when('/verres', {
				templateUrl: 'templates/verres.html',
				controller: 'verres'
			}).
			when('/registrar_question', {
				templateUrl: 'templates/createQuestion.html',
				controller: 'create_question'
			}).
			when('/registrar_entidad', {
				templateUrl: 'templates/createEntidad.html',
				controller: 'create_entidad'
			}).
			when('/esp', {
				templateUrl: 'templates/esp.html',
				controller: 'formularioESP'
			}).
			when('/esespeciales', {
				templateUrl: 'templates/esespeciales.html',
				controller: 'formularioESESP'
			}).			
			when('/ed', {
				templateUrl: 'templates/ed.html',
				controller: 'formularioED'
			}).
			when('/cp', {
				templateUrl: 'templates/cp.html',
				controller: 'formularioCP'
			}).
			when('/ese', {
				templateUrl: 'templates/ese.html',
				controller: 'formularioESE'
			});

			// $locationProvider.html5Mode(true);
	}
])

lista.controller('appController', function($scope, $route, $location, $rootScope) {

	$scope.link = function(view) {
		$location.path(view);
	}


	$rootScope.$on("$routeChangeStart", 
		function (event, current, previous, rejection) {
			NProgress.start();
	});      
	$rootScope.$on("$routeChangeSuccess", 
		function (event, current, previous, rejection) {
			NProgress.done();
	});


});

