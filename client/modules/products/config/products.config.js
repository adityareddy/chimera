'use strict';
angular.module('com.module.products')
  .run(function($rootScope, Product, Category, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Products'),
      'app.products.list', 'fa-file', 'app.products', [{sref:'app.products', name:'Categories'}]);

    Product.find(function(data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Products'),
        'bg-yellow', 'fa-shopping-cart', data.length,
        'app.products.list');
    });

    Category.find(function(data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Categories'),
        'bg-aqua', 'fa-shopping-cart', data.length,
        'app.products.list');
    });

  });
