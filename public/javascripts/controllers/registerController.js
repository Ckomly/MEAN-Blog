angular.module('registerCtrl', []).controller('registerController', function($scope, loginService) {

    $scope.info = 'Please fill the form :';
    $scope.tagline = 'Register Controller';

    $scope.submit = function () {

        var userName = $scope.user.userName || "";
        var userEmail = $scope.user.userEmail || "";
        var userPassword = $scope.user.userPassword || "";

        if (userName.length > 2 && userEmail.length > 2 && userPassword.length > 2)
        {
            loginService.register($scope.user).then(function (res) {
                console.log(res.data);
                $scope.user.userName = "";
                $scope.user.userEmail = "";
                $scope.user.userPassword = "";
            });
        }
        else {
            $scope.info = 'Please use valid credentials !';
        }
    };

});
