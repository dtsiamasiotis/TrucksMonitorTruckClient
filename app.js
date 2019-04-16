(function(){
    'use strict';

    angular.module('TruckMonitorClient',['ui.router'])
        .controller('TruckMonitorClientController',TruckMonitorClientController)
        .service('GeolocationService',GeolocationService);

    TruckMonitorClientController.$inject = ['GeolocationService','$timeout'];

    function TruckMonitorClientController(GeolocationService,$timeout){
        this.socket = new WebSocket("ws://localhost:8080/servlet/actions");
        this.lat = 0;
        this.lng = 0;
        this.sendMessage = function(message){

               console.log(message);
               this.socket.send(message);

        };



        this.socket.onmessage = function (evt) {
            console.log(evt.data);
            GeolocationService.getLocation();
            $timeout(function (socket,evt){
                var orderId = evt.data.split("|")[1];
                console.log(orderId);
                socket.send("coordinates:"+GeolocationService.getLat()+","+GeolocationService.getLng()+"|"+orderId);
            },5000,true,this,evt);

        };


        this.socketIsOpen = function(){
            return (this.socket.readyState===1);
        }
        };

    function GeolocationService(){
        var service = this;
        var lat,lng;

        service.getLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(service.showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        };

        service.showPosition=function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
           console.log(lat,lng);
        };

        service.getLat = function(){
            return lat;
        }

        service.getLng = function(){
            return lng;
        }
    }
})();