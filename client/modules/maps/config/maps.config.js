'use strict';
angular.module('com.module.maps')
  .run(function($rootScope, Vehicle, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Maps'),
      'app.maps.list', 'fa-map-marker', 'app.maps');

    Vehicle.find(function(data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Maps'),
        'bg-red', 'fa-map-marker', data.length,
        'app.maps.list');
    });

  });
