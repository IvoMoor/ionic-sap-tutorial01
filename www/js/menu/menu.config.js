(function() {
  'use strict';

  angular.module('app.menu')
    .config(['$stateProvider', Config]);

  function Config($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/menu/menu.template.html'
      });
  }
})();
