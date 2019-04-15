(function () {
    'use strict';

    angular.module('TruckMonitorClient')
        .controller('LoginController', LoginController);


    LoginController.$inject=['$http'];
    function LoginController($http) {
        var self = this;

        self.validateLogin = function(username,password)
        {
            console.log(username+","+password);
            self.askServer(username+password);
        };

        self.askServer=function(requestBody){
            return $http({
                method:"POST",
                url:("http://localhost:4000/validateLogin"),
                data: requestBody
            })
                .then(function(response){
                    console.log(response);
                });
        };
    }

})();






