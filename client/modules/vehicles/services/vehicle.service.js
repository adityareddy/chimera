'use strict';
var app = angular.module('com.module.vehicles');

app.factory('VehicleModel', function ($http) {
    return {
        get: function () {
            return $http.get('/api/get.json');
        }
    };
});