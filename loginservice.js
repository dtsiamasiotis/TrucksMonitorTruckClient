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
                    var result = response.data.result;

                    if(result==="correct")
                    {
                        aunthenticationResult = true;
                    }
                    else
                    {
                        aunthenticationResult = false;
                    }

                    console.log(response);
                    return aunthenticationResult;
                })
               .catch(function (error) {
                   console.error(error); // Note: this logs the js type error
               });

        };

        service.getAuthenticationResult = function(){
            return aunthenticationResult;
        }
    }
})();