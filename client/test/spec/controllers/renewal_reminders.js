'use strict';

describe('Controller: RenewalRemindersCtrl', function () {

  // load the controller's module
  beforeEach(module('gorgonApp'));

  var RenewalRemindersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RenewalRemindersCtrl = $controller('RenewalRemindersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
