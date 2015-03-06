(function() {
	'use strict';
	angular.module('ngSeedApp.constants')
		.constant('ngConstants',
			function() {
				var constants = {};
				constants.VERSION = '0.0.1';
				return constants;
			});
}());
