'use strict';
angular.module('app').controller('searchCtrl', ['dict', '$http', '$scope', function(dict, $http, $scope){
	$scope.name = '';
	$scope.search = function(){
		$http.get('data/positionList.json?name='+$scope.name).success(function(resp){
			$scope.positionList = resp;
		});
	}
	
	$scope.search();
	$scope.tabList = [{
		id:'city',
		name:'城市'
	},{
		id:'salary',
		name:'薪水'
	},{
		id:'scale',
		name:'公司规模'
	}];

	$scope.tClick = function(id, name){
		console.log(id, name)
	}


}])