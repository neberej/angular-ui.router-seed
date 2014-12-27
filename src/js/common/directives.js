(function() {
	'use strict';
	angular.module('ngSeedApp.directives')
		.directive('githubUrl', function() {
			return {
				scope: true, // use a child scope that inherits from parent
				restrict: 'AE',
				replace: 'true',
				template: '<h3><a href = "http://www.github.com/nabaraz">My github</a></h3>'
			};
		});
}());