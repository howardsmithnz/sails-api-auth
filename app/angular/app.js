(function() {

  'use strict';

  angular
    .module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'yellow-card.au.auth0.com',
        clientID: 'GBVuG4oL20zxf9SCIB9sXn7Sz3XNZcr5'
      });

      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'components/home/home.tpl.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'components/profile/profile.tpl.html',
          controller: 'profileController as user'
        });

      jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('token');
      }

      $httpProvider.interceptors.push('jwtInterceptor');
      
      function redirect($q, $injector, auth, store, $location) {
        return {
          responseError: function(rejection) {

            if (rejection.status === 401) {
              auth.signout();
              store.remove('profile');
              store.remove('token');
              $location.path('/home')
            }
            return $q.reject(rejection);
          }
        }
      }
      $provide.factory('redirect', redirect);
      $httpProvider.interceptors.push('redirect');
    });
})();
