angular.module('project.homeservice', [
    'project.presturis'
])

    .factory('HomeService', ['$rootScope', '$http', 'P_RestURIsService', 'P_ConstantsService',
        function ($rootScope, $http, P_RestURIsService, P_ConstantsService) {
            var homeFactory = {};

            return homeFactory;
        }]);
