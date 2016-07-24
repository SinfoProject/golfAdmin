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

  	this.toggleSideNav = function (){
  		$mdSidenav('left').toggle();
  	}

  });