angular.module('project.home', [
    'ui.router'
])

    .config(function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html',
            data: {pageTitle: 'Home'},
            requireLogin: false
        });
    })

    .controller('HomeCtrl', function HomeController($scope) {
    });

