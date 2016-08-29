var str = 'how\'re you?';
var str2 = "how're you?";

var string = 'hello!\nI\'m Aney';
/*
hello!
I'm Aney
*/

var string = "hello";
string.length; // 5

var string = "hello";
string.charAt(1); // e
string[1]; // e

var string = "hello";
string.split(''); // ['h', 'e', 'l', 'l', 'o']
var string2 = "cat,dog,pig";
string.split(','); // ['cat', 'dog', 'pig']

var string = "hello ";
var string2 = "world";
var string3 = string.concat(string2); // "hello world"

var string = "   Hello    ";
string.trim(); // "Hello"

var string = "aBcD";
string.toUpperCase(); // "ABCD"
string.toLowerCase(); // "abcd"

var string = "abcde";
string.substr(1,3); // "bcd"

var string = "abcde";
string.substring(1,3); // "bc" 

var string = "abcde";   
string.slice(1,3); // "bc"
string.slice(-4,3); // "bc"

var string = "hello world";
string.replace('hello', 'goodbye'); // "goodbye world"

var string = "hello world";
string.indexOf('o'); // 4
string.lastIndexOf('o'); // 7

