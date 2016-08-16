'use strict';

describe('Controller: LeaderboardGameidCtrl', function () {

  // load the controller's module
  beforeEach(module('golfAdminApp'));

  var LeaderboardGameidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeaderboardGameidCtrl = $controller('LeaderboardGameidCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LeaderboardGameidCtrl.awesomeThings.length).toBe(3);
  });
});
