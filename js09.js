var array = [1, 2, 3, 4];
array.length; // 4

var array = [1, 2, 3];
array.join(); // "1,2,3"
array.join(':'); // "1:2:3"

var array = [1,2,3];
array.concat(4,5); // [1,2,3,4,5]
array.concat([6,7]); // [1,2,3,6,7]

var array = [1, 2, 3, 4];
array.reverse(); // [4, 3, 2, 1]

//stack
var array = [1,2,3];
array.push(4); // 4
array; // [1,2,3,4]
array.pop(); // [4]

//queue
var array = [1,2,3];
array.unshift(0);   // 4   (length)
array; 				// [0,1,2,3]
array.shift();      // [0]

var array = [1,2,3,4];
array.splice(2, 1, 5); // 3
array; // [1,2,5,4];

array.splice(3, 0, 6);	// 추가만 할 때, 가운데 0
array;	//[1, 2, 5, 6, 4];


var array = [1,2,3];
array.map(function(x) {
  return x+1;
}); // [2,3,4]
//map은 바뀐 새 배열을 반환

array.forEach(function(x, i) {
  alert(x + ':' + i);
});
//forEach는 반환x

var array = [1, 2, 3, 4, 5];
array.reduce(function(prev, cur) {
 return prev + cur;
}); // 15

//오른쪽부터 줄여가고 싶으면, reduceRight 함수를 사용

var array = [1,2,3,4,5];
array.filter(function(x) {
  return x % 2 === 0;
}); // [2,4]

var array = [5,2,3,4,1];
array.sort(function(x,y) {
  return x - y;
}); // [1,2,3,4,5]



var array = [1, 3, 5, 7, 9];
array.every(function(i) {
 return i % 2 === 1;
}); // true

array.every(function(i) {
 return i < 9;
}); // false
array.some(function(i) {
 return i === 9;
}); // true


Array.isArray('array?'); // false
Array.isArray(['array?']); // true
Array.isArray(array); //true