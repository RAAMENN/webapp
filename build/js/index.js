'use strict';

angular.module('app',['ui.router']);
'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	}).state('position',{
		url: '/position/:id',
		templateUrl: 'view/position.html',
		controller: 'positionCtrl'
	}).state('company',{
		url:'/company/:id',
		templateUrl: 'view/company.html',
		controller: 'companyCtrl'
	});
	$urlRouterProvider.otherwise('main');
}]);
'use strict';

angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){
	$http.get('data/company.json?id='+$state.params.id).then(doneCallback);
	function doneCallback(response){
		$scope.company = response.data;
	}
}]);
'use strict';

angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){
	$http.get('/data/positionList.json').then(doneCallbacks);

	function doneCallbacks(response){
		$scope.list=response.data;
	}
}]);
'use strict';

angular.module('app').controller('positionCtrl',['$q','$http','$state','$scope',function($q,$http,$state,$scope){
	$scope.isLogin = false;
	function getPosition(){
		var def = $q.defer();
		$http.get('/data/position.json?id='+$state.params.id).then(doneCallbacks,errorCallback);
		function doneCallbacks(response){
			$scope.position = response.data;
			def.resolve(response.data);
		}
		function errorCallback(error){
			def.reject(error);
		}
		return def.promise;
	}
	function getCompany(id){
		$http.get('/data/company.json?id='+id).then(doneCallbacks);
		function doneCallbacks(response){
			$scope.company = response.data;
		}
	}
	getPosition().then(function(obj){
		getCompany(obj.companyId);
		console.log(obj);
	});
	
}]);
'use strict';

angular.module('app').directive('appCompany',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/company.html',
		scope: {
			com: '='
		}
	};
}]);
'use strict';

angular.module('app').directive('appFoot',[function(){
	return{
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/foot.html'
	};
}]);
'use strict';

angular.module('app').directive('appHead',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/head.html'
	};
}]);
'use strict';

angular.module('app').directive('appHeadBar',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/headBar.html',
		scope: {
			text: '@'
		},
		link: function(scope){
			scope.back = function(){
				window.history.back();
			};
		}
	};
}]);
'use strict';

angular.module('app').directive('appPositionClass',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionClass.html',
		scope: {
			com: '='
		},
		link: function($scope){
			$scope.showPositionList = function(idx){
				$scope.positionList = $scope.com.positionClass[idx].positionList;
				$scope.isActive = idx;
			};
			$scope.$watch('com',function(newVal){
				if(newVal) $scope.showPositionList(0);
			});
		}
	};
}]);
'use strict';

angular.module('app').directive('appPositionInfo',[function(){
	return{
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionInfo.html',
		scope: {
			isLogin: '=',
			position: '='
		}
	};
}]);
'use strict';

angular.module('app').directive('appPositionList',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl:  'view/template/positionList.html',
		scope: {
			data: '='
		} 
	};
}]);

