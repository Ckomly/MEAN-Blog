angular.module('usersCtrl', []).controller('usersController', function($scope, userService) {

    // console.log(userService.showUsers());
    //console.log('toto');
    $scope.tagline = 'USERS SHOW';
    $scope.info = 'User infos';
    userService.showUsers().then(function (res) {

           $scope.items = res.data;
       });

});
