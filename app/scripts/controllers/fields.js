// 'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:FieldsCtrl
 * @description
 * # FieldsCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('FieldsCtrl', function ($http,$scope,socket,$rootScope) {

    var vm = this;

    vm.checkSocket = function (){
      console.log('check');
      socket.emit('sockettest',{'saludo':'milibro'});
    }

    socket.on('respuesta',function (res){
      console.log('Me dieron la bienvenida');
    });

    vm.fieldToUpdate = {};
    vm.userMessage = '';
    getFieldsList();

    function getFieldsList(){
      $http.get($rootScope.APIurl+'/field')
      .then(function (data){
        vm.fields = data.data;
      });
    }

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

  	vm.createField = function (){
  		if($scope.myform.$valid){
        var fieldObj = {
          "name" : $scope.myform.fieldName.$modelValue,
          "nHoles" : $scope.myform.fieldHoles.$modelValue
        }
        $http.post($rootScope.APIurl+'/field',fieldObj).then(function (data){
          var res = data.data;
          $http.put($rootScope.APIurl+'/field/'+res.id+'/holes',vm.holes).then(function (dataHoles){
            getFieldsList();
          });
        });
      }
  	}

    vm.updateField = function (){
      if($scope.myformEdit.$valid){
        var fieldObj = {
          "name" : vm.fieldToUpdate.fieldName,
          "nHoles" : vm.fieldToUpdate.fieldHoles
        }
        
        $http.put($rootScope.APIurl+'/field/'+vm.fieldToUpdate.id,fieldObj).then(function (data){
          var res = data.data;
          var auxArray = Array();
          var aux = vm.fieldToUpdate.holesFields;
          for(var i=0; i<aux.length; i++ ){
            auxArray.push(aux[i].par);
          }
          $http.put($rootScope.APIurl+'/field/'+res.id+'/holes',vm.holes).then(function (dataHoles){
            getFieldsList();
            vm.userMessage = 'Campo actualizado.';
          });
        });
      }
    }

    vm.setFieldUpdate = function (field){
      vm.fieldToUpdate = field;
    }
    vm.unsetFieldUpdate = function (){
      vm.fieldToUpdate = {};
      vm.userMessage = '';
    }

    vm.deleteField = function (){
      $http.delete($rootScope.APIurl+'/field/'+vm.fieldToUpdate.id)
      .then(function (data){
        if(data.data.error){
          vm.userMessage = 'Este campo esta siendo utilizado, no puede ser eliminado.';
        }else{
          vm.userMessage = 'Campo eliminado.';
          vm.unsetFieldUpdate();
        }
        getFieldsList();
      });
    }

  });
