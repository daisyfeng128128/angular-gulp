'use strict';
angular.module('app').directive('appTab',[function(){
	return{
		restrict:'A',
		replace:true,
		scope:{
			list:'=',
			tabClick:'&'  //定义接口，父控制器里的回调函数就是tabClick
		},
		templateUrl:'view/template/tab.html',
		link:function($scope){
			$scope.click = function(tab){
				$scope.selectId = tab.id;
				$scope.tabClick(tab); //告诉父控制器，这个元素被点击了
			}
		}
	}
}]);
