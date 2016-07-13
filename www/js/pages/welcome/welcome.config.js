(function() {
  'use strict';

  angular.module('app.pages.welcome')
    .config(['$stateProvider', Config]);

  function Config($stateProvider) {
    $stateProvider.state('app.welcome', {
      url: '/welcome',
      views : {
        menuContent : {
          templateUrl: '/js/pages/welcome/welcome.template.html'
        }
      }
    });
  }
})();
