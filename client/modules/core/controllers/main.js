'use strict';

/**
 * @ngdoc function
 * @name gorgonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the core module
 */
angular.module('com.module.core')
	.controller('MainCtrl', function($scope, $rootScope, User, $state) {
		$scope.menuoptions = $rootScope.menu;
		$scope.$on('$viewContentLoaded', function(event) {
			AdminLTE.init();
		});

		$scope.boxes = $rootScope.dashboardBox;

		$scope.isActive = function(root) {
		    return $state.includes(root);
		};

		$scope.currentUser = User.getCurrent();

    $scope.logout = function() {
      User.logout(function() {
        $state.go('login');
      });
    };
	});
