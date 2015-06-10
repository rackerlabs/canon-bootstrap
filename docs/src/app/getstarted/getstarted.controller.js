'use strict';

angular.module('docs').controller('GetstartedCtrl', GetstartedCtrl);

GetstartedCtrl.$inject = ['$scope', 'nav'];

function GetstartedCtrl($scope, nav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[1].title;
    $scope.subtitle = nav.topnav[1].subtitle;
};
