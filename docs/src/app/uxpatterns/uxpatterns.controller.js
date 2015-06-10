'use strict';

angular.module('docs')
  .controller('UxpatternsCtrl', function ($scope, nav, subnav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[3].title;
    $scope.subtitle = nav.topnav[3].subtitle;
    $scope.subnav = subnav.getSubnav(3); 
  });
