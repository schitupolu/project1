angular.module('project', [
    'templates-app',
    'templates-common',
    'ngAnimate',
    'ngSanitize',
    'ngCookies',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.expandable',
    'ui.grid.selection',
    'project.pconstants',
    'project.putils',
    'project.presturis',
    'project.authservice',
    'project.loginservice',
    'project.homeservice',
    'project.login',
    'project.home'
])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $urlRouterProvider.otherwise('/login');
        }])

    .run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
        // Everytime the route in our app changes check auth status
        $rootScope.$on("$stateChangeStart", function (event, next, current) {
            $rootScope.userLoggedIn = false;
            if (AuthService.getUserAuthenticated()) {
                $rootScope.userLoggedIn = true;
            }
            // if you're logged out send to login page.
            if (next.requireLogin && !AuthService.getUserAuthenticated()) {
                $rootScope.userLoggedIn = false;
                $state.go('login');
                event.preventDefault();
            }
        });
        $rootScope.$state = $state;
    }])

    .controller('AppCtrl', ['$rootScope', '$scope', '$cookieStore', '$state', 'AuthService',
        function MainController($rootScope, $scope, $cookieStore, $state, AuthService) {
            $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $scope.pageTitle = toState.data.pageTitle + ' | Project';
                }
            });

            $rootScope.logoutUser = function () {
                AuthService.setUserAuthenticated(false);
                $state.go('login');
            };
        }]);

