document.getElementById('wrap'); // <div id="wrap" data-reactid="32">...</div>

document.getElementsByClassName('클래스');
document.getElementsByName('이름');
document.getElementsByTagName('태그');

document.querySelector('#wrap'); // <div id="wrap" data-reactid="32">...</div>

var div = document.createElement('div'); // 메모리에 div가 생성

var text = document.createTextNode('abcde');

document.createDocumentFragment();
//가짜 도큐먼트 생성,
//도큐먼트 태그를 조작하는것은 성능이 떨어지므로,
//미리 가짜 도큐먼트에서 작업을 하고, 한번에 추가

var div = document.createElement('div');
var text = document.createTextNode('텍스트');
var fragment = document.createDocumentFragment();
div.appendChild(text);
fragment.appendChild(div);
document.body.appendChild(fragment);

{
  document: {
    html: {
      head: {
        title: ...
      },
      body: {
        header: ...
      }
    }
  }
}

//Node : 태그+텍스트
//Element : Tag
var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");

Element = Node.ELEMENT_NODE	//1
Text = Node.TEXT_NODE			//3
Comment = Node.COMMENT_NODE			//8
Document =  Node.DOCUMENT_NODE //9
DOCTYPE = Node.DOCUMENT_TYPE_NODE //10 
Document Fragment = Node.DOCUMENT_FRAGMENT_NODE //11

document.body.firstChild;	// first child.. ex)<header>...</header>
document.body.lastChild;	// last child..

document.body.parentNode;	// <html> ... </html>

document.getElementsByTagName('head')[0].nextSibling;
// 첫 head tag 다음 형제

document.getElementsByTagName('head')[0].previousSibling;
// 첫 head tag 이전 형제

var footer = document.getElementsByTagName('footer');
footer.innerHTML; // ex) 'hello'
footer.innerHTML = 'goodbye';

footer.innerHTML = '<b>bold</b>';

var tag = document.getElementById('header');
tag.id; // 'header'





var newElement = document.createElement('div');
document.body.appendChild(newElement);
//body 마지막 자식 태그로 추가

document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]);
//body 마지막 자식 tag remove

document.body.insertBefore(newElement, document.getElementById('header'));
// id가 header인 태그 앞에 newElement tag 추가


var clone = document.getElementsByTagName('head')[0].cloneNode();
// 첫 head 태그 자신 복사
