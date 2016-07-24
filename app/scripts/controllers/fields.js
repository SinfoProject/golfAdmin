'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:FieldsCtrl
 * @description
 * # FieldsCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('FieldsCtrl', function ($http) {
  	
  	var vm = this;

  	$http.get('http://localhost:7000/field')
  		.then(function (data){
  		vm.fields = data.data;
  	});

  	vm.buildHoles = function (){
  		if(vm.fieldHoles > 1 && vm.fieldHoles <= 18){
  			var auxArray = Array(vm.fieldHoles);
	  		for(var i=0; i<vm.fieldHoles; i++){
	  			auxArray[i] = i+1;
	  		}
	  		vm.holesList = auxArray;
  		}else{
  			vm.holesList = 0;
  		}
  	}

  	vm.checks = function (){
  		alert(vm.fieldName);
  	}

  });
