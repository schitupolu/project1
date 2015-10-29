angular.module('project.home.details', [])

    .controller('DetailsCtrl', ['$rootScope', '$scope', '$state', 'HomeService', 'P_ConstantsService', 'P_UtilsService',
        function ($rootScope, $scope, $state, HomeService, P_ConstantsService, P_UtilsService) {
            console.log("Invoked DetailsCtrl !!!");
        }]);

