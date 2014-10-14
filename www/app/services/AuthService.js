angular.module('auth.service', [])

    .factory("AuthService", function ($rootScope, $http, $q) {

        return {
            login: function (permissions) {
                var q = $q.defer();

                facebookConnectPlugin.login(permissions, function (success) {
                    q.resolve(success);
                }, function (error) {
                    q.reject(error);
                });

                return q.promise;
            },

            logout: function () {
                var q = $q.defer();

                facebookConnectPlugin.logout(function (success) {
                    q.resolve(success);
                }, function (error) {
                    q.reject(error)
                });
                return q.promise;
            },

            api: function (request, permissions) {
                var q = $q.defer();

                facebookConnectPlugin.api(request, permissions, function (success) {
                    q.resolve(success);
                }, function (error) {
                    q.reject(error)
                });
                return q.promise;
            }
        }
    });
