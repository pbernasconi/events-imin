angular.module('friends.ctrl', [])

    .controller('FriendsCtrl', function ($scope, $state) {

        $scope.loginFB = function () {
            console.log("logging into facebook");
            $state.go('tab.dash');
        }
    });



