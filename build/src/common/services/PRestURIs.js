angular.module('project.presturis', [])
    .constant('P_RestURIsService', {
        //Home
        GET_DeviceUserCommentsURL: 'http://166.62.81.233:8080/opinion/entry-point/getComment',
        POST_DeviceUserCommentsURL: 'http://166.62.81.233:8080/opinion/entry-point'
    });