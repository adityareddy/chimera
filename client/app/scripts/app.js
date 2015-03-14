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
		'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/vehicles', {
        templateUrl: 'views/vehicles.html',
        controller: 'VehiclesCtrl'
      })
      .when('/service_entries', {
        templateUrl: 'views/service_entries.html',
        controller: 'ServiceEntriesCtrl'
      })
      .when('/fuel_entries', {
        templateUrl: 'views/fuel_entries.html',
        controller: 'FuelEntriesCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/service_reminders', {
        templateUrl: 'views/service_reminders.html',
        controller: 'ServiceRemindersCtrl'
      })
      .when('/renewal_reminders', {
        templateUrl: 'views/renewal_reminders.html',
        controller: 'RenewalRemindersCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/vendors', {
        templateUrl: 'views/vendors.html',
        controller: 'VendorsCtrl'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
