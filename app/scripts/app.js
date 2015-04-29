'use strict';

/**
 * @ngdoc overview
 * @name takepartApp
 * @description
 * # takepartApp
 *
 * Main module of the application.
 */
angular
  .module('takepartApp', ['ui.router', 'ngAnimate', 'ngCookies', 'ngTouch'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to / for now
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('widget', {
        url: '/',
        templateUrl: 'views/widget.html',
        controller: 'MainCtrl'
      });
  }]);
