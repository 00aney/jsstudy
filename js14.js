/* Aney */

var makeClosure = function() {
	var name = 'Aney';
	return function() {
		alert(name);
	}
};

var closure = makeClosure(); 
/*
	function() {
		alert(name);
	}
*/
closure();	// 'Aney';

/* 메모리 관리를 위해서 함수 안에 지역변수는 정리가 되는데,
 클로저는 지역변수를 정리하지 않습니다.
 함수를 호출한 후에도 그 안의 name 변수를 계속 갖고 있습니다.
*/

var counter = function() {
	var count = 0;
	funtion changeCount(number) {
		count += number;
	}
	return {
		increase: function() {
			changeCount(1);
		},
		decrease: function() {
			changeCount(-1);
		},
		show: function() {
			alert(count);
		}
	}
};

var counterClosure = counter();
counterClosure.increase();
counterClosure.show();		//1
counterClosure.decrease();
counterClosure.show();		//0


