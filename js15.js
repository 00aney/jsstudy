/* JSON */

var example = {
	"stringify": "please",
	"parseMe": "thankYou"
};

var string = JSON.stringify(example);
//'{"stringify": "please","parseMe": "thankYou"}'

var parsed = JSON.parse(string); //다시 JSON 형태로

//copy object
var obj = {test: 'yes'};
var obj2 = JSON.parse(JSON.stringify(obj));
obj2.test = 'no';
obj.test;//yes


//Object 는 키값을 "" 감싸지 않아도 되지만, JSON 은 키값도 감싸야함.