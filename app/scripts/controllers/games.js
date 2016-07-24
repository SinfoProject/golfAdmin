'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('GamesCtrl', function ($http) {
    
  	var vm = this;

  	$http.get('http://localhost:7000/field')
  		.then(function (data){
  		vm.fields = data.data;
  	});
  	$http.get('http://localhost:7000/game')
  		.then(function (data){
  		vm.games = data.data;
  	});

  });
