angular.module('loginService', []).factory('loginService', ['$http', function($http) {

    return {
        home : function() {
            return $http.get('/');
        },

        login : function(userData) {
            return $http.post('/login', userData);
        },

        register : function(userData) {
            return $http.post('/register', userData);
        },

        delete : function(id) {
            return $http.delete('/delete', userData);
        }
    }

    $locationProvider.html5Mode(true);
}]);
