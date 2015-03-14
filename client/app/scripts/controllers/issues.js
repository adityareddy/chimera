'use strict';

/**
 * @ngdoc function
 * @name gorgonApp.controller:IssuesCtrl
 * @description
 * # IssuesCtrl
 * Controller of the gorgonApp
 */
angular.module('gorgonApp')
  .controller('IssuesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
