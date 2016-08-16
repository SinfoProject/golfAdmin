'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:FieldsCtrl
 * @description
 * # FieldsCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('RegisterCtrl', function ($http,$scope) {
    
    var vm = this;
    vm.userToUpdate = {};
    vm.userMessage = '';
    getUsersList();

    function getUsersList(){
      $http.get('http://localhost:7000/user')
      .then(function (data){
        vm.users = data.data;
        //console.log(vm.users);
      });
    }

    vm.createUser = function (){
      if($scope.myform.$valid){
        var userObj = {
          "name" : $scope.myform.userName.$modelValue,
          "pass" : $scope.myform.userPass.$modelValue
        }
        $http.post('http://localhost:7000/user',userObj)
        .then(function (data)
        {
          var res = data.data;
          getUsersList();
          vm.userName=null;
          vm.userPass=null;
          vm.userMessage = 'Usuario Creado';
        });
      }
    }

    vm.updateUser = function (){
      if($scope.myformEdit.$valid){
        var userObj = {
          "name" : vm.userToUpdate.name,
          "pass" : vm.userToUpdate.pass
        }
        
        $http.put('http://localhost:7000/user/'+vm.userToUpdate.id,userObj).then(function (data){
          var res = data.data;
            getUsersList();
            vm.unsetUserUpdate();
            vm.userMessage = 'Usuario actualizado.';
        });
      }
    }

    vm.setUserUpdate = function (user){
      vm.userToUpdate = user;
      //console.log(user);
    }
    vm.unsetUserUpdate = function (){
      vm.userToUpdate = {};
      vm.userMessage = '';
    }

    vm.deleteUser = function (){
      $http.delete('http://localhost:7000/user/'+vm.userToUpdate.id)
      .then(function (data)
      {
        if(data.data.error)
        {
          vm.userMessage = 'Este Usuario esta siendo utilizado, no puede ser eliminado.';
        }
        else
        {
          vm.unsetUserUpdate();
          getUsersList();
          vm.userMessage = 'Usuario eliminado.';
        }
      });
    }
  });
