'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:GeneralCtrl
 * @description
 * # GeneralCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('GeneralCtrl', function ($mdSidenav,$rootScope) {

    $rootScope.APIurl = 'http://localhost:7000';
    // $rootScope.APIurl = 'http://192.168.100.6:7000';

  	var vm = this;

  	$rootScope.logged = false;

  	$rootScope.togglelogin = function (){
      $rootScope.logged = !$rootScope.logged;
  	}

  	vm.toggleSideNav = function (){
  		$mdSidenav('left').toggle();
  	}


  });