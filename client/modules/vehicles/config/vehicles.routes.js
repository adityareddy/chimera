'use strict';
angular.module('com.module.vehicles')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.vehicles', {
        abstract: true,
        url: 'vehicles',
        templateUrl: 'modules/vehicles/views/main.html'
      })
      .state('app.vehicles.list', {
        url: '',
        templateUrl: 'modules/vehicles/views/list.html',
        controller: 'VehiclesCtrl'
      })
      .state('app.vehicles.add', {
        url: '/add',
        templateUrl: 'modules/vehicles/views/form.html',
        controller: 'VehiclesCtrl'
      })
      .state('app.vehicles.edit', {
        url: '/:id/edit',
        templateUrl: 'modules/vehicles/views/form.html',
        controller: 'VehiclesCtrl'
      })
      .state('app.vehicles.view', {
        url: '/:id',
        templateUrl: 'modules/vehicles/views/view.html',
        controller: 'VehiclesCtrl'
      });
  });