angular.module('articleService', []).factory('articleService', ['$http', function($http) {

    return {
        showArticles : function() {
            return $http.get('/articles');
        },

        createArticle : function(articleData) {
            console.log(articleData);
            return $http.post('/newArticle', articleData);
        }
    }

    $locationProvider.html5Mode(true);
}]);
