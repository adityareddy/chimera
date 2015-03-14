'use strict';

describe('Controller: ServiceEntriesCtrl', function () {

  // load the controller's module
  beforeEach(module('gorgonApp'));

  var ServiceEntriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceEntriesCtrl = $controller('ServiceEntriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
