angular.module('tabs.ctrl', [])

    .controller('TabsCtrl', function ($scope, $state) {

        $scope.loginFB = function () {
            console.log("logging into facebook");
            $state.go('tab.dash');
        }
    });



