var steamAPIFilters = angular.module('steamAPIFilters', []);

steamAPIFilters.filter('capitalize', function() {
	return function toTitleCase(str) {
		return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};
});

steamAPIFilters.filter('replaceUnderscore', function() {
	return function replaceUnderscore(str) {
		return str.replace('_', ' ');
	};
});