'use strict';

describe('Controller: FuelEntriesCtrl', function () {

  // load the controller's module
  beforeEach(module('gorgonApp'));

  var FuelEntriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FuelEntriesCtrl = $controller('FuelEntriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
