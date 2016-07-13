(function() {
  'use strict';

  angular.module('app')
    .config(['$urlRouterProvider', Config]);

  function Config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/welcome');
  }
})();
