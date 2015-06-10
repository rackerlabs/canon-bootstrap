'use strict';

describe('Controller: ApplayoutCtrl', function () {

  // load the controller's module
  beforeEach(module('docs'));

  var ApplayoutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplayoutCtrl = $controller('ApplayoutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
