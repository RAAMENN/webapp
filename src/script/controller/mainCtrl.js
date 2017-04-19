'use strict';

angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){
	$http.get('/data/positionList.json').then(doneCallbacks);

	function doneCallbacks(response){
		$scope.list=response.data;
	}
}]);