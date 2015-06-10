'use strict';

angular.module('docs').controller('NavbarCtrl', NavbarCtrl);
NavbarCtrl.$inject = ['$scope', '$location', 'nav'];

function NavbarCtrl($scope, $location, nav) {
    $scope.menu = nav.topnav;

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
}