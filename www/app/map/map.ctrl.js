angular.module('map.ctrl', [])

    .controller('MapCtrl', function ($scope, $state) {

        $scope.loginFB = function () {
            console.log("logging into facebook");
            $state.go('tab.dash');
        }
    });



