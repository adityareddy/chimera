'use strict';
angular.module('com.module.maps')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.maps', {
        abstract: true,
        url: 'maps',
        templateUrl: 'modules/maps/views/main.html'
      })
      .state('app.maps.list', {
        url: '',
        templateUrl: 'modules/maps/views/list.html',
        controller: 'MapCtrl'
      })
      .state('app.maps.add', {
        url: '/add',
        templateUrl: 'modules/maps/views/form.html',
        controller: 'MapCtrl'
      })
      .state('app.maps.edit', {
        url: '/:id/edit',
        templateUrl: 'modules/maps/views/form.html',
        controller: 'MapCtrl'
      })
      .state('app.maps.view', {
        url: '/:id',
        templateUrl: 'modules/maps/views/view.html',
        controller: 'MapCtrl'
      });
  });