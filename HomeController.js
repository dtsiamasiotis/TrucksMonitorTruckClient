(function () {
    'use strict';

    angular.module('TruckMonitorClient')
        .controller('HomeController', HomeController);



    function HomeController() {
        var self = this;
        self.pendingOrder = {address:"Kastorias 4", quantity:"20"};
        //self.showPendingOrderDetails = function()
       // {

         //   isAuthenticated = LoginService.askServer(username+password).then(function(aunthenticationResult){isAuthenticated=aunthenticationResult;
        //    if(isAuthenticated) {
        //        $state.transitionTo('home');
        //    }});

       // };


    }



})();






