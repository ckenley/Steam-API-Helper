var steamAPIControllers = angular.module('steamAPIControllers',[]);

steamAPIControllers.controller('SteamAPICtrl', function ($scope, $http) {
	  $http.get('js/apis.json').success(function(data) {
	    $scope.apis = data;
	    $scope.currentApi = $scope.apis.apilist.interfaces[0];
	    $scope.currentMethod = $scope.currentApi.methods[0];
	  });
});