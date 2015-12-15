angular.module('project', [
        'templates-app',
        'templates-common',
        'ngAnimate',
        'ngSanitize',
        'ngCookies',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',
        'angular-carousel',
        'ngDialog',
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
            $urlRouterProvider.otherwise('/home');
        }])

    .run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
        // Everytime the route in our app changes check auth status
        $rootScope.$on("$stateChangeStart", function (event, next, current) {
            // if you're logged out send to login page.
            if (next.requireLogin && !AuthService.getUserAuthenticated()) {
                $state.go('home');
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
        }]);

