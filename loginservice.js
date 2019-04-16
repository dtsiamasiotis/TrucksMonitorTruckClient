(function(){
    'use strict';
    angular.module('TruckMonitorClient')
        .service('LoginService',LoginService);

    LoginService.$inject=['$http'];
    function LoginService($http){
        var service = this;
        var aunthenticationResult = false;
        service.askServer=function(requestBody){
           return $http({
                method:"POST",
                url:("http://localhost:4000/validateLogin"),
                data: requestBody
            })
                .then(function(response){
                    var result=false;
                    if(requestBody==="adminpass")
                    {
                        aunthenticationResult = true;


                    }
                    else
                    {
                        aunthenticationResult = false;
                    }

                    console.log(response);
                    return aunthenticationResult;
                });

        };

        service.getAuthenticationResult = function(){
            return aunthenticationResult;
        }
    }
})();