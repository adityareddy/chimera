'use strict';

/**
 * @ngdoc directive
 * @name com.module.core.directive:register
 * @description
 * # register
 */
angular.module('com.module.core')
.directive('responsiveTable', function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			angular.element(element).responsiveTable(scope.$eval(attrs.directiveName));
		}
	};
});