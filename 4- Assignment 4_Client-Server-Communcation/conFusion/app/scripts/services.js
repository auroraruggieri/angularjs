'use strict';

angular.module('confusionApp')
        // Retrieve data from the server
		.constant("baseURL","http://localhost:3000/")
		// Dependency injection into the menuFactory service of the $resource service and baseURL
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
                
				this.getDishes = function(){
                    return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT' }});
                };
                
				// implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function(index){
                    
                    return $resource(baseURL+"promotions/:id", null, {'update':{method:'PUT' }});  
                };
                        
        }])

        // Dependency injection into the corporateFactory service of the $resource service and baseURL
		.factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var corpfac = {};
    
            // Remember this is a factory not a service
            corpfac.getLeaders = function(){
				
				return $resource(baseURL+"leadership/:id",null, {'update':{method:'PUT' }});
                    
            };
			       
				return corpfac;
        }])
		
		// Dependency injection into the feedbackFactory service of the $resource service and baseURL
		.service('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

            this.getFeedback = function () {
              return $resource(baseURL + "feedback/:id", null, {'save': {method: 'POST'}});
           };
		   
        }]);