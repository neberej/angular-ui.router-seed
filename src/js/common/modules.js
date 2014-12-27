(function() {
	'use strict';
	angular.module('ngSeedApp.directives', []);
	angular.module('ngSeedApp.services', []);
	angular.module('ngSeedApp.filters', []);
	angular.module('ngSeedApp.constants', []);
	angular.module('ngSeedApp.controllers', ['ngSeedApp.filters', 'ngSeedApp.services', 'ngSeedApp.directives', 'ngSeedApp.constants']);
}());