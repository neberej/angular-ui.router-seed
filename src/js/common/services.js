(function() {
    'use strict';
    angular.module('ngSeedApp.services')
    .service(
        "ngService",
        function($http, $q) {

            var API = {

                getData: function() {

                    var request = $http({
                        method: "get",
                        url: "/data",
                    });
                    return (request.then(API.handleSuccess, API.handleError));
                },
                handleError: function(response) {
                    return ($q.reject(response.data.message));
                },
                handleSuccess: function(response) {
                    return (response.data);
                }

            };
            // Return public API.
            return ({
                getData: API.getData
            });

        }
    );
}());