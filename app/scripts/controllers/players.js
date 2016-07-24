'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('PlayersCtrl', function ($http) {

    var vm = this;

  	$http.get('http://localhost:7000/player')
  		.then(function (data){
  		vm.players = data.data;
  	});

  	$http.get('http://localhost:7000/team')
  		.then(function (data){
  		vm.teams = data.data;
  	});

  	$http.get('http://localhost:7000/game')
  		.then(function (data){
  		vm.games = data.data;
  	});

  });
