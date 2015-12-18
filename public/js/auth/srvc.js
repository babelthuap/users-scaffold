'use strict';

angular.module('authApp')

.service('authSrvc', function($http){

  this.login = userInfo => {
    return $http.post('/users/login', userInfo)
  }

  this.register = userInfo => {
    return $http.post('/users/register', userInfo)
  }

})