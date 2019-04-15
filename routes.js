(function(){
    'use strict';

    angular.module('TruckMonitorClient').config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'templates/login.template.html',
                controller: 'LoginController as loginController'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.template.html',
                //controller: 'OrdersController as orders',
                
            });
    }
})();