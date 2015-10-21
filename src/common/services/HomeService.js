angular.module('project.homeservice', [
    'project.presturis'
])

    .factory('HomeService', ['$rootScope', '$http', 'P_RestURIsService', 'P_ConstantsService',
        function ($rootScope, $http, P_RestURIsService, P_ConstantsService) {
            var homeFactory = {};

            homeFactory.getDeviceUserComments = function () {
                return $http.get(P_RestURIsService.GET_DeviceUserCommentsURL).then(function (result) {
                        return result.data.result.deviceUserComment;
                    },
                    function (error) {
                        console.log('Error while fetching device user comments in homeFactory.getCommentsData:' + error);
                    });
            };

            return homeFactory;
        }]);
