'use strict';

angular.module('docs')
  .controller('UicomponentsCtrl', function ($scope, nav, subnav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[4].title;
    $scope.subtitle = nav.topnav[4].subtitle;
    $scope.subnav = subnav.getSubnav(4); 
  });
