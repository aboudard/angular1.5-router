/**
 * Created by A15285 on 20/07/2016.
 */
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
    'ngMessages'

])

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        var homeState = {
            name: 'home',
            url: '/',
            component: 'homeComponent'
        };
        var adminState = {
            name: 'admin',
            url: '/',
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
    });
