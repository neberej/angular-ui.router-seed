(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('homeController', [
			'$scope',
			function($scope) {
				$scope.title = "Welcome";
			}
		]);
}());