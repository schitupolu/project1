angular.module('project.homeservice', [
        'project.presturis'
    ])

    .factory('HomeService', ['$rootScope', '$http', 'P_RestURIsService', 'P_ConstantsService',
        function ($rootScope, $http, P_RestURIsService, P_ConstantsService) {
            var homeFactory = {};

            homeFactory.getEntityInformation = function () {
                return $http.get(P_RestURIsService.GET_EntityInformationURL).then(function (result) {
                        return result.data.result.entityUserComment;
                    },
                    function (error) {
                        console.log('Error while fetching device user comments in homeFactory.getCommentsData:' + error);
                    });
            };
            homeFactory.addEntityInformation = function (dataObj) {
                return $http.post(P_RestURIsService.POST_EntityInformationURL, dataObj).then(function (result) {
                    return result.data;
                });
            };

            return homeFactory;
        }]);
