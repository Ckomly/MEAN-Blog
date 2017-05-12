angular.module('articlesCtrl', []).controller('articlesController', function($scope, $location, $rootScope, articleService) {

    $scope.tagline = 'Create new Article';
    $scope.info = 'Write your article';

    articleService.showUserArticles($rootScope.session).then(function (res) {

           $scope.items = res.data;

       });

    $scope.submitArticle = function () {

        var articleTitle = $scope.article.articleTitle|| "";
        var articleContent = $scope.article.articleContent || "";
        $scope.article.userName = $rootScope.session;
        var userName = $scope.article.userName || "";
        console.log($scope.article.userName);


        if (articleTitle.length > 2 && articleContent.length > 2)
        {
            articleService.createArticle($scope.article).then(function (res) {
                console.log(res.data);
                $scope.article.articleTitle = "";
                $scope.article.articleContent = "";
            });
            $location.path('/');
        }
        else {
            $scope.info = 'Please use valid credentials !';
        }
    };

});
