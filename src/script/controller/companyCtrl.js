'use strict';
angular.module('app').controller('companyCtrl',['$http','$scope', '$state', function($http, $scope, $state){
	$http.get('data/company.json?id='+$state.params.id).success(function(resp){
		$scope.company = resp;

	})
	
}])
