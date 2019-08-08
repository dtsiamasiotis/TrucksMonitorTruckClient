(function(){
    'use strict';
    angular.module('TruckMonitorClient')
        .service('WebSocketService',WebSocketService);


    function WebSocketService(){
        var service = this;
        var socket = null;


        service.openConnection = function() {
            service.socket = new WebSocket("ws://localhost:8080/servlet/actions");


            service.socket.onmessage = function (evt) {
                console.log(evt.data);
                GeolocationService.getLocation();
                $timeout(function (socket, evt) {
                    var orderId = evt.data.split("|")[1];
                    console.log(orderId);
                     socket.send("coordinates:"+GeolocationService.getLat()+","+GeolocationService.getLng()+"|"+orderId);
                }, 5000, true, this, evt);

            };

        };

        service.sendMessage = function(message){
            service.socket.send(message);
        };

        service.socketIsOpen = function(){
            return (service.socket.readyState===1);
        };
    }
})();