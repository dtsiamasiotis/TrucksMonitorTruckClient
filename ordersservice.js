(function(){
    'use strict';
    angular.module('TruckMonitorClient')
        .service('OrderService',OrderService);


    function OrderService(){
        var service = this;
        var pendingOrder;
        var completedOrders = [];

        service.getPendingOrder = function(){
            return service.pendingOrder;
        }

        service.setPendingOrder = function(order){
            service.pendingOrder = order;
        }

    }
})();