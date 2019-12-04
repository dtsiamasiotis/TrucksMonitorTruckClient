(function () {
    'use strict';

    angular.module('TruckMonitorClient')
        .controller('LoginController', LoginController);


    LoginController.$inject=['$state','LoginService','WebSocketService','md5'];
    function LoginController($state,LoginService,WebSocketService,md5) {
        var self = this;
        var isAuthenticated = false;
        var wrongCredentials = false;

        self.validateLogin = function(username,password)
        {
            var passwordHash = md5.createHash(password);
            console.log(passwordHash);
            var user = {username:username,password:passwordHash};
            isAuthenticated = LoginService.askServer(JSON.stringify(user)).then(function(aunthenticationResult){isAuthenticated=aunthenticationResult;
            if(isAuthenticated) {
                WebSocketService.openConnection();
                $state.transitionTo('home');
            }
            else{
                wrongCredentials = true;
            }});

        };

        self.getStatusOfCredentials = function()
        {
            return wrongCredentials;
        };


    }



})();






