'use strict';

angular.module('docs')
  .config(function ($stateProvider) {
    $stateProvider
      .state('getstarted', {
        url: '/getstarted',
        templateUrl: 'app/getstarted/getstarted.html',
        controller: 'GetstartedCtrl'
    });
});