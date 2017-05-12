angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })

        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerController'
        })

        .when('/delete', {
            templateUrl: 'views/home.html',
            controller: 'deleteController'
        })

    $locationProvider.html5Mode(true);

}]);
