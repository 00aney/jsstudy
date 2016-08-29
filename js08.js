var a = 0.1;
var b = 0.2;

a + b; // 0.30000000000000004

(a+b).toFixed(2);		//'0.30'
0.00125.toPrecision(2);	//'0.0012'
1.2356.toFixed(3);		//'1.236'
1.2346.toPrecision(2);	//'1.2'

//toFixed : 지정된 소수자릿수까지 반올림하여 문자열로 반환
//toPrecision : 지정된 자릿수만큼 문자열로 반환

3 / "dd";		// Nan
isNaN(3 / "33")	// true

NaN == NaN;		// false

3 / 0;		// Infinity
-3 / 0;		// -Infinity

parseInt("123aney", 10);		// 123
parseFloat("0.5dollar");		// 0.5
parseFloat(0.3.toFixed(2));		// 0.3

Number("1");	     //1
Number("0.5dollar"); // NaN

//2진법 0b
0b111;	// 7
//8진법 0
017;	//15
//16진법 0x
0xA3;	//163

Math.floor(5.5); // 5
Math.ceil(5.5); // 6
Math.round(5.5); // 6
Math.round(5.49); // 5

Math.abs(-15); // 15

Math.pow(2, 3); // 8
Math.sqrt(16); // 4

Math.max(5, 6, 10); // 10
Math.min(2, 8, 9); // 2

