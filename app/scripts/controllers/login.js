'use strict';
/**
 * @ngdoc function
 * @name golfAdminApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('LoginCtrl', function ($rootScope,$location,$scope,$http)
  {
  	var vm = this;
    vm.searchUser = function (){
      if($scope.myform.$valid){
        var userObj = {
          "name" : $scope.myform.userName.$modelValue,
          "pass" : $scope.myform.userPass.$modelValue
        }
        $http.post('http://localhost:7000/login',userObj)
        .then(function (data)
        {
          var res = data.data;
          if(!res)
          {
          	alert("Not Found!");
          }
          else
          {
          	console.log(res);
          	$rootScope.logged=true;
          	$location.path("/games");
          }
        });
      }
    }
  });