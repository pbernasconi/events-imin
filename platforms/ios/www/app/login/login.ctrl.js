angular.module('login.ctrl', [])

    .controller('LoginCtrl', function ($scope, $rootScope, $state, AuthService) {

        $scope.loginFB = function () {
            console.log("logging into facebook");

            AuthService.login(["public_profile"]).then(function (result) {
                console.log(JSON.stringify(result));
                $rootScope.authenticated = true;
                $rootScope.userID = result.userID;


                var facebookAuthData = {
                    "id": result.id + "",
                    "access_token": result["accessToken"],
                    "expiration_date": result["expirationDate"].slice(0, -1).replace("+", ".") + "Z"
                };

                Parse.FacebookUtils.logIn(facebookAuthData, {

                    success: function (_user) {
                        console.log("User is logged into Parse");
                    },

                    error: function (error1, error2) {
                        console.log("Unable to create/login to as Facebook user");
                        console.log("  ERROR1 = " + JSON.stringify(error1));
                        console.log("  ERROR2 = " + JSON.stringify(error2));
                    }
                });

                AuthService.api("me", ["public_profile"]).then(function (result) {
                    $rootScope.currentUser = result;
                });

                $state.go('tab.map');
            }, function (error) {
                // alert("Error logging in : " + error)
            });

        }
    });



