'use strict';
angular.module('app').directive('appPositionList',[function(){
	return{
		restrict: 'A',
	    replace: true,
	    templateUrl: 'view/template/positionList.html',
	    $scope:{
	    	data:'='  //降低控制器与指令的耦合度，提高代码复用率
	    }
	}
}])


