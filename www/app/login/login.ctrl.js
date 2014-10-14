angular.module('login.ctrl', [])

    .controller('LoginCtrl', function ($scope, $rootScope, $state, AuthService) {

        $scope.loginFB = function () {
            console.log("logging into facebook");

            AuthService.login(["public_profile"]).then(function (result) {
                console.log(JSON.stringify(result));
                $rootScope.authenticated = true;
                $rootScope.userID = result.userID;

                AuthService.api("me", ["public_profile"]).then(function (result) {
                    $rootScope.currentUser = result;
                });

                $state.go('tab.map');
            }, function (error) {
                // alert("Error logging in : " + error)
            });

        }
    });



