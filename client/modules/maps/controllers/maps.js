'use strict';

/**
 * @ngdoc function
 * @name gorgonApp.controller:VehiclesCtrl
 * @description
 * # VehiclesCtrl
 * Controller of the gorgonApp
 */
angular.module('com.module.maps')
	.controller('MapCtrl', function($scope, Vehicle, gettextCatalog, uiGmapGoogleMapApi) {
				$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
	
		$scope.characterList = [];
		$scope.myPageItemsCount = 15;
		Vehicle.count(function(data){
			$scope.myItemsTotalCount = data.count;
		});
	
		$scope.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
			Vehicle.find({
					filter: {
						offset: currentPage * pageItems,
						limit: pageItems
					}
				},
				function(response) {
					$scope.characterList = response;
					Vehicle.count(function(data){
						$scope.myItemsTotalCount = data.count;
					});
				},
				function(errorResponse) { /* error */ }
			);
		};
		$scope.mySelectedItems = [];

	
    $scope.formFields = [{
      key: 'name',
      type: 'input',
      templateOptions: {
      label: gettextCatalog.getString('Name'),
      required: true
      }
    }, {
      key: 'categoryId',
      type: 'input',
      templateOptions: {
      label: gettextCatalog.getString('Category'),
      required: true
      }
    }, {
      key: 'description',
      type: 'input',
      templateOptions: {
      label: gettextCatalog.getString('Description')
      }
    }, {
      key: 'percentage',
      type: 'input',
      templateOptions: {
      label: gettextCatalog.getString('Percentage')
      }
    }, {
      key: 'price',
      type: 'input',
      templateOptions: {
      label: gettextCatalog.getString('Price')
      }
    }];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: gettextCatalog.getString('Save')
    };
	
	});