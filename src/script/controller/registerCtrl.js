'use strict';
angular.module('app').controller('registerCtrl', ['$http', '$scope', function($http, $scope){
	// $http.get('/data/positionList.json') 返回的是promise
	/*$http.get('/data/positionList.json').success(function(resp){
		$scope.list = resp;
	});*/
	$scope.user = {
		phone:123,
		password:123456
	}

}])