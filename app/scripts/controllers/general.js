'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:GeneralCtrl
 * @description
 * # GeneralCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('GeneralCtrl', function ($mdSidenav,$rootScope,$location) {

  	var vm = this;

  	$rootScope.logged = false;

  	$rootScope.togglelogin = function (){
      $rootScope.logged = !$rootScope.logged;
  	}

  	vm.toggleSideNav = function ()
    {
  		$mdSidenav('left').toggle();
  	}


  });