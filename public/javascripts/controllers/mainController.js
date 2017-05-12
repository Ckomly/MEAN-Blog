angular.module('mainCtrl', []).controller('mainController', function($scope, $rootScope) {

    $scope.tagline = 'MAIN';

    $rootScope.session = sessionStorage.getItem('userEmail') || "";

    $rootScope.clearSession = function () {
      sessionStorage.clear();
      $rootScope.session = "";
    }

});
