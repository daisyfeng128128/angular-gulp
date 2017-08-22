'use strict';
angular.module('app').filter('filterByObj', [function(index) {
	return function(list, obj){ //list数组， obj要过滤的对象
		var result = [];
		angular.forEach(list, function(item) {  //这个循环没法停止
			var isEqual = true;
			for(var e in obj){
				if (item[e]!==obj[e]) {
					isEqual = false;
				}
			}

			if (isEqual) {
				result.push(item)
			}

		});
		return result;
	};
}]);