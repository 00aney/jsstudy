/*
Window
*/
var really = 'Really?'
window.really; // 'Really?'


window.close();

window.open('https://github.com/00aney/TIL'); // 새 탭
window.open('https://github.com/00aney/TIL', '_self'); // 현재 탭
window.open('', '', 'width=200,height=200'); // 가로세로 200px의 팝업창


var popup = window.open('', '', 'width=200,height=200');
popup.document.write('안녕하세요');

popup.close();

popup.opener.document.write('hello');
//opener 객체를 사용하여, 원래 탭에 접근

window.encodeURI(); // 인코딩
window.decodeURI();	// 디코딩

/*
screen
화면에 대한 정보.
너비(width), 높이(height), 픽셀(pixelDepth), 컬러(colorDepth), 작업표시줄을 제외한 너비와 높이(availWidth, availHeight) 등

location
location 객체는 주소에 대한 정보(protocol, host, hostname, pathname, href 속성을 이용).
location.reload()로 새로고침도 가능

history
history는 앞으로가기(forward), 뒤로가기(back)
주소를 이동(go)

document
document는 웹페이지를 담당하는 객체
*/