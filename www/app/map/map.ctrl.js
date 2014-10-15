angular.module('map.ctrl', [])

    .controller('MapCtrl', function ($scope, $state, $cordovaGeolocation) {

        $scope.myLocation = "";


        $scope.getLocation = function () {
            $cordovaGeolocation
                .getCurrentPosition()
                .then(function (position) {
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;

                    $scope.myLocation = position;
                }, function (err) {
                    // error
                });
        };


        /*
         var pins = [
         {
         lat: 49.28115,
         lon: -123.10450,
         title: "A Cool Title",
         snippet: "A Really Cool Snippet",
         icon: mapKit.iconColors.HUE_ROSE
         },
         {
         lat: 44.28115,
         lon: -123.10450,
         title: "A Cool Title",
         snippet: "A Really Cool Snippet",
         icon: mapKit.iconColors.HUE_ROSE
         }
         ];

         var options = {height: 460,
         diameter: 1000,
         atBottom: false,
         lat: 49.281468,
         lon: -123.104446
         };

         mapKit.showMap(function (success) {

         }, function (error) {

         }, options);

         */
    });



