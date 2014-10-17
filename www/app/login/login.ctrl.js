angular.module('login.ctrl', [])

    .controller('LoginCtrl', function ($scope, $rootScope, $state, AuthService) {

        $scope.loginFB = function () {
            console.log("logging into facebook");

            AuthService.login(["public_profile", "user_friends"]).then(function (result) {
                console.log(JSON.stringify(result));
                $rootScope.authenticated = true;
                $rootScope.userID = result.userID;

                AuthService.api("me", null).then(function (result) {
                    $rootScope.currentUser = result;
                });

                $state.go('tab.map');
            }, function (error) {
                // alert("Error logging in : " + error)
            });

        };


        $scope.loginNoFB = function () {
            $state.go('tab.map');
        }
    });



