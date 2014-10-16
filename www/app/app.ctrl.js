angular.module('app.ctrl', [])

    .controller("AppCtrl", function ($scope, $rootScope, $state, $ionicModal) {


        $rootScope.authenticated = true;


        // Settings Modal

        $ionicModal.fromTemplateUrl('app/settings/settings.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.settingsModal = modal;
        });


        $scope.openSettings = function () {
            console.log('opening settings');
            $scope.settingsModal.show();
        };

        $scope.closeSettings = function () {
            $scope.settingsModal.hide();
        };

        // New Event Modal


        $scope.eventForm = {
            name : "",
            hosts: "",
            location : {
                longitude: "",
                latitude: ""
            },
            time : new Date()
        };

        $scope.saveEvent = function (eventForm) {
            console.log(eventForm);
        };

        $ionicModal.fromTemplateUrl('app/events/newEvent.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.eventModal = modal;
        });
        $scope.newEvent = function () {
            console.log('new event');
            $scope.eventModal.show();
        };



        $scope.closeEvent = function () {
            $scope.eventModal.hide();
        };

        $scope.createEvent = function () {
            console.log("event created");
            $scope.eventModal.hide();
        };

    });
