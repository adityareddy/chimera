'use strict';

describe('Controller: ServiceentriesCtrl', function () {

  // load the controller's module
  beforeEach(module('gorgonApp'));

  var ServiceentriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceentriesCtrl = $controller('ServiceentriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
