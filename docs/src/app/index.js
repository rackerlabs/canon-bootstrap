'use strict';

angular.module('docs', ['ngResource', 'ui.router', 'ngSanitize']).config(IndexConfig);

IndexConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function IndexConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/home');

    //$locationProvider.html5Mode(true);
}
