angular.module('profilCtrl', []).controller('profilController', function($scope, $rootScope, userService) {

    // console.log(userService.showUsers());
    //console.log('toto');
    $scope.tagline = 'USER';
    $scope.info = 'Profil infos';
    userService.showProfil($rootScope.session).then(function (res) {

           $scope.items = res.data;

           console.log($scope.items);
       });

});
