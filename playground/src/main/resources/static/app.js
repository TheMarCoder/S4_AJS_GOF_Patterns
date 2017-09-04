'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngRoute',
  'myApp.version',
  'myApp.gofPlayground'
]).
config(['$urlRouterProvider',
    function( $urlRouterProvider) {
        $urlRouterProvider.otherwise('/playground/gof/overview');
}]);
