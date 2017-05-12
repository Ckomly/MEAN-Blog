angular.module('loginCtrl', []).controller('loginController', function($scope, $rootScope, $location, loginService) {

    $scope.tagline = 'Login Controller';

    $scope.info = 'Please fill the form :';
    $scope.tagline = 'Login Controller';

    $scope.submit = function () {
        var userEmail = $scope.user.userEmail || "";
        var userPassword = $scope.user.userPassword || "";

        if (userEmail.length > 4 && userPassword.length > 4)
        {
            loginService.login($scope.user).then(function (res) {
                //reset les input
                console.log(res.data._id);
                $scope.user.userEmail = "";
                $scope.user.userPassword = "";
                //if user is logged -> redirect to home.
                if(res.data){
                  sessionStorage.setItem("session", res.data._id);
                  $rootScope.session = sessionStorage.getItem("session") || "";
                  $location.path('/');
                }
            });

        }
        else {
            $scope.info = 'Please use valid credentials !';
        }
    };

});
