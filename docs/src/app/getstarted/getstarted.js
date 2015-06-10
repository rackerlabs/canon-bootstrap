'use strict';

angular.module('docs').config(GetStartedConfig);

GetStartedConfig.$inject = ['$stateProvider'];

function GetStartedConfig($stateProvider) {
    $stateProvider
      .state('getstarted', {
        url: '/getstarted',
        templateUrl: 'app/getstarted/getstarted.html',
        controller: 'GetstartedCtrl'
      });
};