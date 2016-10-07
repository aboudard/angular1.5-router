'use strict';

// Declare app level module which depends on views, and components
angular.module('pmApp', [

    'ui.router',
    'pmApp.rootComponent',
    'pmApp.homeComponent',
    'pmApp.adminComponent',
    'pmApp.headerComponent',
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'pmApp.users'

])

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        var homeState = {
            name: 'home',
            url: '/',
            component: 'homeComponent'
        };
        var adminState = {
            name: 'admin',
            url: '/admin',
            component: 'adminComponent'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(adminState);

        // when there is an empty route, redirect to /index
        $urlRouterProvider.when('', '/');
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('indigo')
            .primaryPalette('indigo')
            .accentPalette('pink');
        $mdThemingProvider.theme('lime')
            .primaryPalette('lime')
            .accentPalette('orange')
            .warnPalette('blue');
        $mdThemingProvider.alwaysWatchTheme(true);
    })
    .run(['$location', 'users', '$transitions', '$log',
    function ($location, users, $transitions, $log) {


        function restrictRoute($transitions) {
            // If the user is not authenticated
            if (!users.isAdmin()) {
                $log.debug("admin restricted");
                $transitions.router.stateService.go("home")
            } else {
                $log.debug("admin ok");
            }
        }
        $transitions.onStart( { to: 'admin' }, restrictRoute);

    }]);
