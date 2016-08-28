var aney = {
	firstName: 'Aney',
	lastName: 'Kim'
};

//키 문자열에 스페이스 들어간 경우 '로 감싸줘야함.
var wrap = { 'ex ample': 'wrap' };

aney.firstName; 	//'Aney'
aney['firstName'];  //'Aney'
aney.lastName;		//'Kim'
aney['lastName'];	//'Kim'

/* 객체 활용 방법 */
aney.lastName = 'Park';
aney; //{ firstName: 'Aney', lastName: 'Park'}

var aney = {
	body: {
		height: 172,
		weight: 70
	}
};
aney.body.height; //172

/* 다른 객체 생성 방법 */
var aney = new Object();
aney.firstName = 'Aney';
aney.lastName = 'Kim';
aney.body = new Object();
aney.body.height = 172;
aney.body.weight = 70;

/*
객체 리터럴 : {}를 사용해서 만든 객체
리터럴 : new 를 사용하지 않고 만드는 것
*/