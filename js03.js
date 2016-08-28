/*
Function
*/

function addOne(x) {
	var y = x + 1;
	return y;
}

var addOne = function(x) {
	var y = x + 1;
	return y;
}

var i = addOne(1);
i;		// 2
var j = addOne(2);
var k = addOne(100);

function multiply(x, y) {
	return x * y;
}

//매개변수가 많으면, 객체를 주로 사용
var n = function(object) {
	return object.a + object.b + object.c + object.d;
}

n({ a: 1, b: 2, c: 3, d: 4 });	//10

var a = multiply(addOne(2), addOne(4));

var dateChecker = function() {
	var date = new Date();
	alert(date);
};
dateChecker();	//undefined


var really = function() {
	return;
	alert('저는 실행되지 않습니다');
};
really();		//undefined


//객체나 배열의 값으로도 함수가 들어갈 수 있음.
var a = {
	b: function() {
		return;
	}
}

var mother = function(func) {
	func();
};
var children = function() {
	alert('Hi');
};
mother(children);	// 'Hi'


//1급 함수 : 값으로 사용되는 함수

