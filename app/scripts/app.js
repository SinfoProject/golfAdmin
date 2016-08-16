'use strict';

/**
 * @ngdoc overview
 * @name golfAdminApp
 * @description
 * # golfAdminApp
 *
 * Main module of the application.
 */
angular
  .module('golfAdminApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'btford.socket-io'
  ]).
  factory('socket', function (socketFactory) {
    var myIoSocket = io.connect('localhost:7000');
    var socket = socketFactory({
      ioSocket: myIoSocket
    });
    return socket;
  })
  .config(function ($routeProvider,$locationProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('brown');

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/fields', {
        templateUrl: 'views/fields.html',
        controller: 'FieldsCtrl',
        controllerAs: 'fields'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl',
        controllerAs: 'games'
      })
      .when('/games/:game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .when('/games/:game/leaderboard', {
        templateUrl: 'views/leaderboard.html',
        controller: 'LeaderboardCtrl',
        controllerAs: 'vm'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamsCtrl',
        controllerAs: 'teams'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'cv'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });