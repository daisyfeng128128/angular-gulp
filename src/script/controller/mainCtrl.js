'use strict';
angular.module('app').controller('mainCtrl', ['$scope', function($scope){
	$scope.list1 = [{
		id:'1',
		name:'销售',
		companyName:'公司1',
		imgSrc:'image/company-3.png',
		city:'上海',
		industry:'工商业',
		time:'2017-7-18 21:35'
	},{
		id:'2',
		name:'产品',
		companyName:'公司2',
		imgSrc:'image/company-2.png',
		city:'北京',
		industry:'互联网',
		time:'2017-7-18 21:37'
	}
	];

	$scope.list2 = [{
		id:'2',
		name:'产品',
		companyName:'公司2',
		imgSrc:'image/company-2.png',
		city:'北京',
		industry:'互联网',
		time:'2017-7-18 21:37'
	}]
	
}])