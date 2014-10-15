angular.module('settings.ctrl', [])

    .controller('SettingsCtrl', function ($scope, $state, AuthService) {

        $scope.logout = function () {

            AuthService.logout().then(function () {
                console.log('logout success');
                $scope.settingsModal.hide();
                $state.go('login');
            });
        }

    });



