(function () {
    'use strict';

    angular.module('TruckMonitorClient')
        .controller('LoginController', LoginController);


    LoginController.$inject=['$state','LoginService','WebSocketService'];
    function LoginController($state,LoginService,WebSocketService) {
        var self = this;
        var isAuthenticated = false;

        self.validateLogin = function(username,password)
        {
            console.log(username+","+password);
            isAuthenticated = LoginService.askServer(username+password).then(function(aunthenticationResult){isAuthenticated=aunthenticationResult;
            if(isAuthenticated) {
                WebSocketService.openConnection();
                $state.transitionTo('home');
            }});

        };


    }



})();






