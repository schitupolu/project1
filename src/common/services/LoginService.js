angular.module('project.loginservice', [
    'project.pconstants',
    'project.presturis'
])

    .factory('LoginService', ['$rootScope', '$http', 'P_RestURIsService', 'P_ConstantsService',
        function ($rootScope, $http, P_RestURIsService, P_ConstantsService) {
            var loginFactory = {};

            loginFactory.authenticateUser = function (username, password) {
                return 'success';
            };

            return loginFactory;
        }]);