'use strict';

angular.module('surfApp')


    .constant("baseURL","http://localhost:3000/")


    .service('surfSpotsFactory', ['$resource', 'baseURL', function($resource,baseURL) {



        this.getSurfSpots = function(){
            return $resource(baseURL+"surfspot/:id",null,  {'update':{method:'PUT' }});
        };







    }])

    /*.factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {

        var corporateFactory = {};


        // Implement two functions, one named getLeaders,
        // the other named getLeader(index)
        // Remember this is a factory not a service

        corporateFactory.getLeaders = function(){

            return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
        };


        return corporateFactory;


    }])


    .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {

        var feedbackFactory = {};


        // Implement two functions, one named getLeaders,
        // the other named getLeader(index)
        // Remember this is a factory not a service

        feedbackFactory.getFeedbacks = function(){

            return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
        };


        return feedbackFactory;


    }])*/

;
