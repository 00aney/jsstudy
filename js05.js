if (a > 10) {
  alert('10보다 큼');
} else if (a > 5) {
  alert('5보다 큼');
} else {
  alert('5보다 작거나 같음');
}

if (0) {
  alert('실행 안 됨');
}
if ('') {
  alert('실행 안 됨');
}
if ([]) {
  alert('실행됨');
}

//0, -0, null, false, NaN, undefined, 빈 문자열('')의 값을 가지면 false
//false == []이지만 if ([])는 실행



var i = 10, j;
if (i > 10) {
  j = 15;
} else {
  j = 5;
}

var j = i > 10 ? 15 : 5;


if (a === 10) {
  alert('c는 10');
} else if (c === 9) {
  alert('c는 9');
} else if (c === 8) {
  alert('c는 8');
} else {
  alert('나머지');
}


for (var i = 0; i < 10; i++) {
  alert(i);
}

var i = 0;
while (i < 10) {
  alert(i);
  i++;
}

var i = 0;
while (i < 10) {
  if (i > 5) {
    break;
  }
  alert(i);
  i++;
}

var i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  alert(i);
}

var i = 0;
do {
  alert(i);
  i++;
} while (i < 10)