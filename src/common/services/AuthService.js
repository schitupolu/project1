angular.module('project.authservice', [])

    .service('AuthService', [function () {
        var userIsAuthenticated = false;
        this.setUserAuthenticated = function (value) {
            userIsAuthenticated = value;
        };
        this.getUserAuthenticated = function () {
            return userIsAuthenticated;
        };
        return this;
    }]);
