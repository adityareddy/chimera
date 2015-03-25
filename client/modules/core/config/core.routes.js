'use strict';
angular.module('com.module.core')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('router', {
        url: '/router',
        templateUrl: 'modules/core/views/login.html',
      })
      .state('app', {
        abstract: true,
        url: '/',
        templateUrl: 'modules/core/views/app.html',
        controller: 'MainCtrl'
      })
      .state('app.dashboard', {
        url: '',
        templateUrl: 'modules/core/views/dashboard.html'
      });
//    $urlRouterProvider.otherwise('/router');
  });