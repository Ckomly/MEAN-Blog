angular.module('sampleApp', ['ngRoute',
                             'appRoutes',
                             //CONTROLLERS
                             'registerCtrl',
                             'mainCtrl',
                             'loginCtrl',
                             'usersCtrl',
                             'profilCtrl',
                             'articlesCtrl',
                             //SERVICES
                             'loginService',
                             'userService',
                             'articleService']);
