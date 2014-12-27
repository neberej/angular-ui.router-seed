(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('moreController', [
			'$scope',
			function($scope) {
				$scope.title = "Dependencies";
			}
		]);
}());