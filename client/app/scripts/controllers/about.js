'use strict';

/**
 * @ngdoc function
 * @name gorgonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gorgonApp
 */
angular.module('gorgonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
