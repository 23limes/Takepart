'use strict';

/**
 * @ngdoc function
 * @name takepartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the takepartApp
 */
angular.module('takepartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.expand = function() {
      $scope.jack = 'hello Jack';
    };
  });
