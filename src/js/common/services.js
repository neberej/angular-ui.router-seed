(function() {
    'use strict';
    angular.module('ngSeedApp.services')
    .service(
        "ngService",
        function($http, $q) {

            // Return public API.
            return ({
                getData: getData
            });

            function getData() {

                var request = $http({
                    method: "get",
                    url: "/data",
                });
                return (request.then(handleSuccess, handleError));
            }

            function handleError(response) {
                return ($q.reject(response.data.message));
            }

            //Unwrap data from API response
            function handleSuccess(response) {
                return (response.data);
            }

        }
    );
}());