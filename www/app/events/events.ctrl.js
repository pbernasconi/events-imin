angular.module('events.ctrl', [])

    .controller('EventsCtrl', function ($scope, $state) {

        $scope.loginFB = function () {
            console.log("logging into facebook");
            $state.go('tab.dash');
        }
    });



