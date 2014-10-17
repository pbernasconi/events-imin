angular.module('starter', [
    // including libraries
    'ionic',
    'ngCordova',
    'google-maps'.ns(),


    // APP
    'app.ctrl',
    'settings.ctrl',
    'tabs.ctrl',
    'login.ctrl',
    'events.ctrl',
    'friends.ctrl',
    'map.ctrl',

    // Services
    'auth.service'

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

        if (!window.cordova) {
            facebookConnectPlugin.browserInit(353926364788975);
        }
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
                templateUrl: "app/tabs/tabs.html",
                controller: "TabsCtrl"
            })

            .state('newEvent-map', {
                url: "/newEvent/map",
                templateUrl: "app/events/newEventMap.html",
                controller: "AppCtrl"
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

