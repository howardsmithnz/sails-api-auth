(function() {

  'use strict';

  angular
    .module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'yellow-card.au.auth0.com',
        clientID: 'GBVuG4oL20zxf9SCIB9sXn7Sz3XNZcr5'
      });
    });
})();
