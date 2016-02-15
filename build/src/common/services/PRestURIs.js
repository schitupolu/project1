angular.module('project.presturis', [])
    .constant('P_RestURIsService', {
        //Home
        GET_EntityInformationURL: 'http://166.62.81.233:8080/opinion/getComment/date/2015-12-28',
        GET_EntityTopNewsURL: 'http://166.62.81.233:8080/opinion/getNewsByEntity/date/2016-01-07/entityKey/AAPL',
        GET_EntityNewsFeedURL: 'http://166.62.81.233:8080/opinion/getNewsByEntity/date/2016-01-07/entityKey/AAPL',
        POST_EntityInformationURL: 'http://166.62.81.233:8080/opinion/postComment/date/2016-01-03'
    });