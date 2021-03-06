(function(){
    'use strict';
    angular.module('TruckMonitorClient')
        .service('GoogleService',GoogleService);

    GoogleService.$inject=['$http'];
    function GoogleService($http){
        var service = this;
        var aunthenticationResult = false;
        service.askServer=function(address){
           return $http({
                method:"GET",
                //url:("http://localhost:4000/googleService")
               url:("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=")

            })
                .then(function(response){


                    console.log(response.data.results[0].geometry.location);
                    return response.data.results[0].geometry.location;

                });

        };

        service.getAuthenticationResult = function(){
            return aunthenticationResult;
        }
    }
})();