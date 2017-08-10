'use strict';
angular.module('app').directive('appHeadBar',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/headBar.html',
		scope:{
			text:'@'

		},
		link:function($scope){
			$scope.back = function(){
				window.history.back();
			};
			$scope.$on('abc',function(event, data){
				//event事件对象
				//data随着事件传入过来的数据
				console.log(event,data);
			});
			$scope.$emit('cba',{name:2});

		}


	}
}])