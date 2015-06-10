'use strict';

angular.module('docs')
  .config(function ($stateProvider) {
    $stateProvider
      .state('uxpatterns', {
        url: '/uxpatterns',
        templateUrl: 'app/uxpatterns/uxpatterns.html',
        controller: 'UxpatternsCtrl'
      });
  });