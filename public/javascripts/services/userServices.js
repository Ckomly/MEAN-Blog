angular.module('userService', []).factory('userService', ['$http', function($http) {

    return {
        showUsers : function() {
            return $http.get('/users');
        },

        showProfil : function(userData) {
            console.log(userData);
            return $http.get('/articles/'+userData, userData);
        }
    }

    $locationProvider.html5Mode(true);
}]);
