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
    'ngMaterial'
  ])
  .config(function ($routeProvider,$locationProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('brown');

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
        controllerAs: 'leaderboard'
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
      .otherwise({
        redirectTo: '/'
      });
  });