'use strict';
angular.module('app').directive('appPositionClass',[function(){
	return {
		restrict:'A',
		replace:true,
		scope:{
			com:'='
		},
		templateUrl:'view/template/positionClass.html',
		link:function($scope){	//给指令写逻辑
			$scope.showPositionList = function(idx){
				$scope.positionList = $scope.com.positionClass[idx].positionList;
				$scope.isActive = idx;
				debugger
			}

			$scope.showPositionList(0)

		}
	}
}]);
