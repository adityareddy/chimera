'use strict';
/**
 * @ngdoc overview
 * @name com.module.core
 * @module
 * @description
 * @requires gorgonApp
 *
 * The `com.module.core` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
angular.module('com.module.maps', ['uiGmapgoogle-maps'])
.config(function(uiGmapGoogleMapApiProvider ) {
    uiGmapGoogleMapApiProvider.configure({
         //key: 'AIzaSyD1iWHBcPadvmZAchQ2rR5ZERO6xetLVKI',
        v: '3.17',
        libraries: 'places'
    });
});
