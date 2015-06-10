'use strict';

angular.module('docs').controller('ApplayoutCtrl', ApplayoutCtrl);

ApplayoutCtrl.$inject = ['$scope', 'nav', 'subnav'];

function ApplayoutCtrl($scope, nav, subnav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[2].title;
    $scope.subtitle = nav.topnav[2].subtitle;
    $scope.subnav = subnav.getSubnav(2); //nav.topnav[2].subnav;
};
