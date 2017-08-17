'use strict';  //定义全局变量，跟sevice有些像，只是没有动态逻辑，只是一个值
angular.module('app').value('dict',{}).run(['dict', '$http',function(dict, $http){
	$http.get('data/city.json').success(function(resp){
		dict.city = resp;
	});
	$http.get('data/salary.json').success(function(resp){
		dict.salary = resp;
	});
	$http.get('data/scale.json').success(function(resp){
		dict.scale = resp;
	});



}])