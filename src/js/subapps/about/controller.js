(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('aboutController', [
			'$scope', 'ngService', 'ngConstants',
			function($scope, ngService, ngConstants) {
				$scope.title = "About";
				$scope.version = ngConstants().VERSION;
				ngService.getData().then(function(data) {
					$scope.id = data.id;
				});
			}
		]);
}());