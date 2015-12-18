'use strict';

angular.module('authApp', ['ui.router', 'ngStorage'])

.run(function($localStorage, $rootScope){
  $rootScope.$storage = $localStorage;
})

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('login',{
    url: '/login',
    templateUrl:'partials/login.html',
    controller:'loginCtrl'
  })
  .state('register',{
    url: '/register',
    templateUrl:'partials/register.html',
    controller:'registerCtrl'
  })

})