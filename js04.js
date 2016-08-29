/*
Operator
*/

var a = 1 + 2; // 3
var b = 5 - 3; // 2
var c = 2 * 4; // 8
var d = 6 / 4; // 1.5
var e = 8 % 3; // 2

var string = 'hello ' + 'world'; // 'hello world'
var string2 = 'hi' + 9; 		 // 'hi9'
var string3 = 1 + 'what' + 2;	 // '1what2'
var string4 = 3 + 4 + 'wow'; 	 // '7wow'
//왼쪽부터 계산되고, 문자열이 있을 경우는 문자열로 바뀌어서 계산

var i = 0;
i++;		 // i는 1이 됩니다.
alert(i++);  // 1을 먼저 alert한 후에 ++되어 i는 2가됩니다.
alert(++i);  // 먼저 ++한 후에 alert하여 3을 alert하게 됩니다.
i = i + 1; 	 // i++과 같습니다.

var i = 10;
i += 2; // 12 (i = i + 2와 같음)
i -= 3; // 9 (i = i - 3과 같음)
i *= 4; // 36 (i = i * 4와 같음)
i %= 5; // 1 (i = i % 5와 같음)

100 == 10 * 10; // true
6 != 2 * 2; 	// true
2 * 5 > 3 * 3;  // true
6 * 3 <= 2 * 9; // true

var ternary = i > 10 ? 15 : 6

var a = 10;
var b = 20;
a < b && a * 2 == b; // true
a > b || a * 2 <= 20; // true
!(a < b); // false

var k, l, n, p;
var j = k && l; // k와 l이 모두 있으면 j = l, 하나라도 없으면 j = undefined;
var m = n || p; // n이 있으면 m = n, 없으면 m = p;



0 == ''			//true
0 == false		//true
0 == []			//true

0 === '' 	// false
0 === false // false
0 === [] 	// false



