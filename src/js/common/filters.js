(function() {
	'use strict';
	angular.module('ngSeedApp.filters')
		.filter('makeUppercase', function() {
			return function(item) {
				return item.toUpperCase();
			};
		});
}());