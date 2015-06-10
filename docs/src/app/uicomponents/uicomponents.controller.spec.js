'use strict';

describe('Controller: UicomponentsCtrl', function () {

  // load the controller's module
  beforeEach(module('docs'));

  var UicomponentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UicomponentsCtrl = $controller('UicomponentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
