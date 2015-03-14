'use strict';

/**
 * @ngdoc function
 * @name gorgonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gorgonApp
 */
angular.module('gorgonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
