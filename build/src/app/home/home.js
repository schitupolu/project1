angular.module('project.home', [
    'ui.router'
])

    .config(["$stateProvider", function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html',
            data: {pageTitle: 'Home'},
            requireLogin: false
        });
    }])

    .controller('HomeCtrl', ["$scope", function HomeController($scope) {
    }]);

