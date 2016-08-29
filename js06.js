Math.random();					// 0~1 사이의 유리수
Math.random() * 10; 			// 0~10 사이의 유리수
Math.floor(Math.random() * 10); // 0~9

var number = [];
number[0] = Math.floor(Math.random() * 10);
do {
  number[1] = Math.floor(Math.random() * 10);
} while(number[1] === number[0])
do {
  number[2] = Math.floor(Math.random() * 10);
} while(number[2] === number[0] && number[2] === number[1])
do {
  number[3] = Math.floor(Math.random() * 10);
} while(number[3] === number[0] && number[3] === number[1] && number[3] === number[2])

var list = [0,1,2,3,4,5,6,7,8,9];
var number = [];
for (var i = 0; i < 4; i++) {
  var select = Math.floor(Math.random() * list.length);
  console.log('list', list, 'number', number, 'length', list.length);
  number[i] = list.splice(select, 1)[0];
}

var count = 1;
var strike = 0;
var ball = 0;
while (count <= 10) {
  console.info('count', count, '번째 시도');
  // 숫자를 입력받고 비교를 준비하는 부분
  var input = prompt('숫자를 입력하세요'); // 숫자를 받는 부분

  if(input == undefined)
  	break;

  var inputArray = input.split(''); // split함수는 아래에 설명
  strike = 0; // strike와 ball의 개수를 초기화
  ball = 0;
  count++; // 시도 횟수는 하나 증가
  // 입력받은 숫자를 비교분석하는 부분
  for (var j = 0; j < 4; j++) {
    for (var k = 0; k < 4; k++) {
      if (number[k] == inputArray[j]) {
        if (k === j) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }
  // 결과를 표시하는 부분 console객체는 밑에 설명
  if (strike === 4) {
    console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
    break;
  } else if (count > 10) {
    console.error('시도 횟수를 초과하셨습니다.');
  } else {
    console.info(inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼');
  }
}
//inputArray.join('')
//join(구분자)는 배열의 아이템 사이에 구분자를 넣으면서, 배열을 합쳐서 문자열로 변경
//[1,2,3,4].join(':')이면, '1:2:3:4'


//prompt에서 취소를 눌렀을 때 게임을 종료하도록 업그레이드(힌트: prompt때 취소를 누르면 input이 undefined가 됩니다)
//몇 번째 시도인지 항상 보여주도록 업그레이드(힌트: console.info에 count를 추가하면 됩니다)


