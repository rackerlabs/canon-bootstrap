'use strict';

describe('Service: subnav', function () {

  // load the service's module
  beforeEach(module('docs'));

  // instantiate service
  var subnav;
  beforeEach(inject(function (_subnav_) {
    subnav = _subnav_;
  }));

  it('should do something', function () {
    expect(!!subnav).toBe(true);
  });

});
