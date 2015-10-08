angular.module('project.login', [
    'ui.router'
])

    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'LoginCtrl',
            templateUrl: 'login/login.tpl.html',
            data: {pageTitle: 'Login'},
            // You do not need to be logged in to go to this route.
            requireLogin: false
        });
    }])
    .controller('LoginCtrl', ['$rootScope', '$scope', '$state', '$cookieStore', 'LoginService', 'AuthService',
        function ($rootScope, $scope, $state, $cookieStore, LoginService, AuthService) {
            $scope.authenticationFailure = false;
            // attempt login to the api
            $scope.attemptLogin = function () {
                $scope.authenticationFailure = false;

                LoginService.authenticateUser($scope.credentials.username, $scope.credentials.password);
                AuthService.setUserAuthenticated(true);
                $state.go('home');
            };

        }]);
