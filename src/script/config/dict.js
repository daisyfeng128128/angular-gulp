'use strict';  //定义全局变量，跟sevice有些像，只是没有动态逻辑，只是一个值
angular.module('app').value('dict',{}).run(['$http',function($http){
	$http.get('data/city.json',function(resp){
		dict.city = resp;
	});
	$http.get('data/salary.json',function(resp){
		dict.salary = resp;
	});
	$http.get('data/scale.json',function(resp){
		dict.scale = resp;
	});



}])