'use strict';
angular.module('app').controller('searchCtrl', ['$http', '$scope', function($http, $scope){
	$scope.name = '';
	$scope.search = function(){
		$http.get('data/positionList.json?name='+$scope.name).success(function(resp){
			$scope.positionList = resp;
		});
	}
	
	$scope.search();


}])