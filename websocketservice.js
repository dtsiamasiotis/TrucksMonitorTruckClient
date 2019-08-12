(function(){
    'use strict';
    angular.module('TruckMonitorClient')
        .service('WebSocketService',WebSocketService);


    WebSocketService.$inject = ['GeolocationService','$timeout'];
    function WebSocketService(GeolocationService,$timeout){
        var service = this;
        var socket = null;


        service.openConnection = function() {
            service.socket = new WebSocket("ws://localhost:8080/servlet/actions");


            service.socket.onmessage = function (evt) {

                var jsonObject = JSON.parse(evt.data);
                console.log(evt.data);
                GeolocationService.getLocation();
                $timeout(function (socket, evt) {
                    var order = jsonObject["order"];
                    var orderId = order.orderId;
                    console.log(orderId);
                    var responseObj = {operation:"sharePosition",coordinates:GeolocationService.getLat()+","+GeolocationService.getLng(),order:order};
                    var responseObjJson = JSON.stringify(responseObj);
                    socket.send(responseObjJson);
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