angular.module('mainCtrl', []).controller('mainController', function($scope, $rootScope, $location) {

    $scope.tagline = 'MAIN';

    $rootScope.session = sessionStorage.getItem('session') || "";

    $rootScope.clearSession = function () {
      sessionStorage.clear();
      $rootScope.session = "";
      $location.path('/');
    }

});
