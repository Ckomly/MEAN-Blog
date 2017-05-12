angular.module('articleService', []).factory('articleService', ['$http', function($http) {

    return {
        showArticles : function() {
            return $http.get('/articles');
        },

        createArticle : function(articleData) {
            console.log(articleData);
            return $http.post('/newArticle', articleData);
        },

        showUserArticles : function(userData) {
            console.log(userData);
            return $http.get('/articles/'+userData, userData);
        }
    }

    $locationProvider.html5Mode(true);
}]);
