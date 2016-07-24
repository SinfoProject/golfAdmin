'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('TeamsCtrl', function ($http) {
      	
    var vm = this;

  	$http.get('http://localhost:7000/team')
  		.then(function (data){
  		vm.teams = data.data;
  	});

  });
