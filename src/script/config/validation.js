'use strict';
angular.module('app').config(['$validationProvider',function($validationProvider) {
	//配置校验规则
	var expression = {
		phone:/^1[\d]{10}/,
		password:function(value){
			if(value) value.length>5;
			return value.length;
		}
	};

	var defaultMsg = {
		phone:{
			success:'',
			error:'必须是11位手机号'
		},
		password:{
			success:'',
			error:'长度至少6位'
		}
	}

	$validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);

}]);
