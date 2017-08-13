'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
	// $stateProvider 用来配置路由 有个state函数，该有两个参数
	$stateProvider.state('main'/*主页面的id,当用服务进行跳转的时候，就会用到该id唯一标识一个路径*/,{
		url: '/main',  //hash值，在url上看到的，也可传参  方式1：/main:id
		templateUrl: 'view/main.html', //页面
		controller:'mainCtrl'
	})

	.state('position',{
		url:'/position/:id', //不同的职位有不同的详情，用id来区别
		templateUrl:'view/position.html',
		controller:'positionCtrl'

	})

	.state('company',{
		url:'/company/:id', 
		templateUrl:'view/company.html',
		controller:'companyCtrl'

	})

	.state('search',{
		url:'/search', 
		templateUrl:'view/search.html',
		controller:'searchCtrl'

	})




	$urlRouterProvider.otherwise('main');  //若以上路由都没实现，则转到这个路由
}])