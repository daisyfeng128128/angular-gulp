'use strict';
angular.module('app')
.service('cache',['$cookies',function($cookies){		//服务
	this.put = function(key,value){
		$cookies.put(key,value);
	};
	this.get = function(key){
		return	$cookies.get(key);
	}
	this.remove = function(key){
		$cookies.remove(key);
	}
}])

/*.factory('cache',['$cookies',function($cookies){		//服务工厂，与服务作用一样，在调用方式上没区别
	//服务工厂的一个好处，可以声明私有属性，相当于服务内部的私有属性，外部不可访问，服务则没这好处
	//当不需要私有对象，就用service的方式进行声明
	var obj = {};
	return{
		put : function(key,value){
			$cookies.put(key,value);
		},
		get : function(key){
			return	$cookies.get(key);
		},
		remove : function(key){
			$cookies.remove(key);
		}
	}
	
	
	
}])*/