angular.module('friends.ctrl', [])

    .controller('FriendsCtrl', function ($scope, $state, AuthService) {

        $scope.filterFriends = '';

        AuthService.api("me/taggable_friends", ["user_friends"]).then(function (result) {
            $scope.friends = result;
            console.table(result);
        }, function (error) {
            console.table(error);
        });
    });



