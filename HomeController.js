(function () {
    'use strict';

    angular.module('TruckMonitorClient')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['GoogleService','$scope'];
    function HomeController(GoogleService,$scope) {
        var self = this;
        self.pendingOrder = {address:"Kastorias 4", quantity:"20"};
        console.log(document.getElementById('map'));
        self.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: {lat: -34.397, lng: 150.644}
        });


        console.log(map);

        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(25,80),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        console.log(map);//var geocoder = new google.maps.Geocoder();


        //self.showPendingOrderDetails = function()
       // {

         //   isAuthenticated = LoginService.askServer(username+password).then(function(aunthenticationResult){isAuthenticated=aunthenticationResult;
        //    if(isAuthenticated) {
        //        $state.transitionTo('home');
        //    }});

       // };

        self.showAddressOnMap = function(){
            var markerPosition = GoogleService.askServer();

        }

    }



})();






