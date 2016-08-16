'use strict';

/**
 * @ngdoc function
 * @name golfAdminApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the golfAdminApp
 */
angular.module('golfAdminApp')
  .controller('GameCtrl', function ($http,$routeParams) {
    
  	var vm = this;

  	$http.get('http://localhost:7000/game/'+$routeParams.game)
  		.then(function (data){
  			vm.game = data.data;
  			vm.players = proccessResults(vm.game.players);


  		var holes = new Array();
			for(var i = 1; i<=vm.game.nHoles; i++){
				holes.push(i);
			}

			vm.holes = holes;
  			
  	});

  	function proccessResults(players){
  		var aux = new Array();
  		var i,j;
  		for( i in players){
  			var total = 0;
  			var player = players[i];
  			for(j in player.holesPlayers){
  				var holes = player.holesPlayers[j];
  				if(holes.shot){
  					total += holes.shot;
  				}
  				if(holes.penalty){
  					total += holes.penalty;
  				}
  			}
  			player.total = total;
  			aux.push(player);
  		}
      console.log(aux);
  		return aux;
  	}

  });
