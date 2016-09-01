/* Scope */

var x = 'global';
function ex() {
	var x = 'local';
	x = 'change';
}

ex();
alert(x);	// 'global'


//


var x = 'global';
function ex() {
  x = 'change';
}
ex();
alert(x); // 'change'

var obj = {
	x: 'local',
	y: function() {
		alert(this.x);
	}
}


var another = function() {
	var x = 'local';
	function y() {
		alert(x);
	}
	retur { y: y };
}

var newScope = another();




var newScope = (function() {
	var x = 'local';
	return {
		y: function() {
			alert(x);
		}
	};
})();

//(function() {})(); IIFE(모듈패턴) 