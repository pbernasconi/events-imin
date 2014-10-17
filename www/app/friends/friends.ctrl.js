angular.module('friends.ctrl', [])

    .controller('FriendsCtrl', function ($scope, $state, AuthService) {

        AuthService.api("me/friends", ["user_friends"]).then(function (result) {
            $scope.friends = result;
            console.table(result);
        }, function (error) {
            console.table(error);
        });
    });



