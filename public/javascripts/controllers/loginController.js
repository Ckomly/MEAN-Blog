angular.module('loginCtrl', []).controller('loginController', function($scope, $rootScope, $location, loginService) {

    $scope.tagline = 'Login Controller';
    $scope.info = 'Please fill the form :';

    $scope.submit = function () {
        var userEmail = $scope.user.userEmail || "";
        var userPassword = $scope.user.userPassword || "";

        if (userEmail.length > 4 && userPassword.length > 4)
        {
            loginService.login($scope.user).then(function (res) {
                //reset inputs
                $scope.user.userEmail = "";
                $scope.user.userPassword = "";
                //if user is logged -> redirect to home.
                console.log(res.data.userName);
                if(res.data._id)
                {
                  sessionStorage.setItem("session", res.data.userName);
                  $rootScope.session = sessionStorage.getItem("session");
                  $location.path('/');
                }
            });

        }
        else {
            $scope.info = 'Please use valid credentials !';
        }
    };

});
