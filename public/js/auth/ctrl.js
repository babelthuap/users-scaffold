'use strict';

angular.module('authApp')
.controller('loginCtrl', ($scope, authSrvc, $localStorage) => {
  $scope.userInfo = {};

  $scope.$storage.test = 'test';

  $scope.login = () => {
    console.log('submit!', $scope.userInfo)
    authSrvc.login($scope.userInfo)
    .success(function(data, status, headers){
      $scope.$storage.header = headers('Authorization');
    })
    .error(function(err){
      console.log(err);
    })
  }

})
.controller('registerCtrl', ($scope, authSrvc, $localStorage) => {
  $scope.newUserInfo = {};

  $scope.submit = () => {
    authSrvc.register($scope.newUserInfo)
    .then(function(data, status, headers){
      $scope.$storage = headers('Authorization');
    },
    function(err){
      console.log(err)
    })
  }

})