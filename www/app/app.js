angular.module('starter', [
    'ionic',
    'starter.controllers',
    'starter.services',

    // APP
    'login.ctrl',
    'events.ctrl',
    'friends.ctrl',
    'map.ctrl'

])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "app/login/login.html",
                controller: "LoginCtrl"
            })

            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/tabs.html"
            })

            .state('tab.events', {
                url: '/events',
                views: {
                    'tab-events': {
                        templateUrl: 'app/events/events.html',
                        controller: 'EventsCtrl'
                    }
                }
            })

            .state('tab.friends', {
                url: '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: 'app/friends/friends.html',
                        controller: 'FriendsCtrl'
                    }
                }
            })

            .state('tab.map', {
                url: '/map',
                views: {
                    'tab-map': {
                        templateUrl: 'app/map/map.html',
                        controller: 'MapCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/login');
    });
