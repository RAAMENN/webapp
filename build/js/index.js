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
	});
	$urlRouterProvider.otherwise('main');
}]);
'use strict';

angular.module('app').controller('mainCtrl',['$scope',function($scope){
	$scope.list=[{
		id: '1',
		name: 'sales reps',
		imgSrc: 'image/company.jpeg',
		companyName: 'sendo',
		city: 'Shanghai',
		industry: 'Manucature',
		time: '2016-06-01 11:05'
	},{
		id: '2',
		name: 'web developer',
		imgSrc: 'image/company1.jpeg',
		companyName: 'Sudo',
		city: 'Tokyo',
		industry: 'Internet',
		time: '2016-06-04 01:05'
	}];
}]);
'use strict';

angular.module('app').controller('positionCtrl',['$scope',function($scope){
	
}]);
'use strict';

angular.module('app').directive('appCompany',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/company.html'
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

angular.module('app').directive('appPositionInfo',[function(){
	return{
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionInfo.html',
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

