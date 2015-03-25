'use strict';
angular.module('com.module.vehicles')
  .run(function($rootScope, Vehicle, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Vehicles'),
      'app.vehicles.list', 'fa-truck', 'app.vehicles');

    Vehicle.find(function(data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Vehicles'),
        'bg-green', 'fa-truck', data.length,
        'app.vehicles.list');
    });

  });
