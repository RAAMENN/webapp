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