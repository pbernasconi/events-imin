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

        $scope.isOpenMap = false;
        $scope.eventForm = {
            name: "",
            hosts: "",
            location: {
                longitude: "",
                latitude: ""
            },
            time: new Date()
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

        $scope.setCurrentLocation = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.eventForm.location.longitude = position.coords.longitude;
                $scope.eventForm.location.latitude = position.coords.latitude;
            })
        };

        $scope.openMap = function () {
            $scope.isOpenMap = true;
        };

        $scope.closeEvent = function () {
            $scope.eventModal.hide();
        };

        $scope.createEvent = function (_eventForm) {
            console.log(_eventForm);
            console.log("event created");
            $scope.eventModal.hide();
        };

    });
