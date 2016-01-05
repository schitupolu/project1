angular.module('project.presturis', [])
    .constant('P_RestURIsService', {
        //Home
        GET_EntityInformationURL: 'http://166.62.81.233:8080/opinion/getComment/date/2015-12-28',
        POST_EntityInformationURL: 'http://166.62.81.233:8080/opinion/postComment/'
    });