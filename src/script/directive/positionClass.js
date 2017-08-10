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
			}
			$scope.$watch('com',function(newVal){
				if (newVal)  $scope.showPositionList(0)
			})
			//com属性名，也可以写表达式或函数名称
			//有3个参数，newVal属性发生改变之后的值，oldVal改变之前的值，scope作用域对象
			//该函数调用的时候,com对象并未传入，控制器还在发送ajax请求等待返回的过程
			//这个时候可能appPositionClass指令已经加载了
			//尽量少用$watch，因为$watch写太多会影响性能

		}
	}
}]);
