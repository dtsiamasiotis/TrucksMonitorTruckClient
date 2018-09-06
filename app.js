(function(){
    'use strict';

    angular.module('TruckMonitorClient',[])
        .controller('TruckMonitorClientController',TruckMonitorClientController);

    TruckMonitorClientController.$inject = ['$scope'];

    function TruckMonitorClientController($scope){
        this.sendMessage = function(message){
            var socket = this.connectToServer();
           socket.onopen = function(event)
           {
               socket.send(message);
               console.log(message);
           }

        };
        this.connectToServer = function(){
            var socket = new WebSocket("ws://localhost:8080/servlet/actions");
            return socket;
        }
        };
})();