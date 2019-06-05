(function(){
    'use strict';

    angular.module('TruckMonitorClient').config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider, LoginService) {

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
                controller: 'HomeController as homeController',
                resolve:{tasks:function(LoginService,$state){
                if(!LoginService.getAuthenticationResult())
                {
                    $state.transitionTo('login');
                }
                        console.log(LoginService.getAuthenticationResult());
               }}

            });
    }
})();