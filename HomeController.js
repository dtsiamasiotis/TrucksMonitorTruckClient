(function () {
    'use strict';

    angular.module('TruckMonitorClient')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['GoogleService','$scope'];
    function HomeController(GoogleService,$scope) {
        var self = this;
        self.showMap = false;
        self.showMapText = "Show on map";
        self.pendingOrder = {address:"Makedonias 28,Agia Paraskevi", quantity:"20", coordinates:null};
        console.log(document.getElementById('map'));
        self.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: {lat: 37.990832, lng: 23.7032341}
        });


        self.showHideAddressOnMap = function(){
            if(self.showMap)
            {
                self.showMap = false;
                self.showMapText = "Show on map";
                return;
            }
            else {
                if(self.pendingOrder.coordinates==null)
                {
                    var markerPosition = GoogleService.askServer(self.pendingOrder.address).then(function (results) {
                        markerPosition = results;

                        self.map.setCenter(markerPosition);
                        self.mapMarker = new google.maps.Marker({
                            map: self.map,
                            position: new google.maps.LatLng(markerPosition.lat, markerPosition.lng)
                        });
                    });
                }

                    self.showMap = true;
                    self.showMapText = "Hide map";


            }

        }

    }



})();






