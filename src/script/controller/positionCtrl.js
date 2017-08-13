'use strict';
angular.module('app').controller('positionCtrl', ['$q','$http', '$state', '$scope', 'cache', function($q, $http, $state, $scope,cache){
	cache.put('to','you');
	$scope.isLogin = false;

	function getPosition(){
		var def = $q.defer(); //创建延迟加载对象
		/*
		$http['post'/'delete'/'put']('url',{
		//数据对象		//传入请求的body,这是get与它们3个的区别，没有数据对象，没有请求体，get的参数写在url里
						get也可在配置对象里传参数，跟在地址栏一样，会自己序列化，拼在请求后面
		},{
			//配置对象
		})
		*/
		/*$http({		//当4中常用的都用不了时，直接用$http
			url:'',
			method:'',
			params:{},
			data:{}		//请求体
		})*/
		$http.get('/data/position.json?id='+$state.params.id).success(function(resp){
			$scope.position = resp;
			def.resolve(resp)

		}).error(function(err){
			def.reject(err);
		})

		return def.promise;
	}

	function getCompany(id){
		$http.get('data/company.json?id='+id).success(function(resp){
			$scope.company = resp;
		})
	}

	getPosition().then(function(obj){
		getCompany(obj.companyId)
	})
	
	//当两个操作，同时执行完之后，再执行对应的操作
	// $q.all([fun1(),fun2()]).then(doneCallbacks, failCallbacks)
	//数组里的元素都是promise对象
	//返回的result也是一个数组，它的下标跟promise传出来的参数是一一对应的
	// $q.all([fun1(),fun2()]).then(function(result){})
	
	
}])