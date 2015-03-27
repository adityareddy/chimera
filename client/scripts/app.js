'use strict';

/**
 * @ngdoc overview
 * @name gorgonApp
 * @description
 * # gorgonApp
 *
 * Main module of the application.
 */
angular
	.module('gorgonApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'angular-loading-bar',
		'ui.router',
		'ui.bootstrap',
		'formly',
		'gettext',
		'com.module.core',
		'com.module.vehicles',
		'com.module.users',
		'com.module.settings',
		'lbServices',
		'toasty',
		'oitozero.ngSweetAlert',
		'autofields',
		'ui.gravatar',
		'com.module.products',
		'formlyBootstrap',
		'trNgGrid',
		'com.module.maps',
	]).config(function($compileProvider, $httpProvider) {
		$compileProvider.debugInfoEnabled(false);
		$httpProvider.useApplyAsync(true);
	});