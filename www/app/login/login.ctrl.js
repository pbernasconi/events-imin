angular.module('login.ctrl', [])

    .controller('LoginCtrl', function ($scope, $state) {

        $scope.loginFB = function () {
            console.log("logging into facebook");
            $state.go('tab.map');
        }
    });



