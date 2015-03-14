'use strict';

/**
 * @ngdoc function
 * @name gorgonApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the gorgonApp
 */
angular.module('gorgonApp')
  .controller('SidebarCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
  });
