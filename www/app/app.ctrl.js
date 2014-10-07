angular.module('app.ctrl', [])

    .controller("AppCtrl", function ($scope, $state, $ionicModal) {

        $ionicModal.fromTemplateUrl('app/events/newEvent.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.newEvent = function () {
            console.log('new event');
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.createEvent = function () {
            console.log("event created");
            $scope.modal.hide();
        }


    });
