'use strict';

describe('Controller: ServiceRemindersCtrl', function () {

  // load the controller's module
  beforeEach(module('gorgonApp'));

  var ServiceRemindersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceRemindersCtrl = $controller('ServiceRemindersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
