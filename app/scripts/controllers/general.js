'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:GeneralCtrl
 * @description
 * # GeneralCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('GeneralCtrl', function ($mdSidenav) {

  	var vm = this;
  	vm.logged = false;

  	vm.togglelogin = function (){
  		vm.logged = !vm.logged;
  	}

  	vm.toggleSideNav = function (){
  		$mdSidenav('left').toggle();
  	}


  });