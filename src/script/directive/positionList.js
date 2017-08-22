'use strict';
angular.module('app').directive('appPositionList',[function(){
	return{
		restrict: 'A',
	    replace: true,
	    templateUrl: 'view/template/positionList.html',
	    scope:{
	    	data:'=',  //降低控制器与指令的耦合度，提高代码复用率
	    	//指令中会创建一个作用域，控制器中创建一个作用域，指令相当于控制器的一个子元素
	    	//=相当于两个的$scope是共享的，是同一个$scope
	    	//并不是完整的$scope共享，而只是声明的属性共享，其他的还是隔离，简言之，在此声明data属性加=，
	    	//就代表保留一个data接口
	    	filterObj:'='
	    }
	}
}])


