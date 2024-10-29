// 문자열 : "", '', ``
// "" vs '' : 모두 사용 가능하나, 실무에서는 ''을 더 많이 사용
// `` : 엔터로 줄바꿈 가능(''에서는 \n) <- 사용 권고 
let myName = "mijung";
console.log(typeof myName);

myName = '박영희';
console.log(typeof myName);

// 2015년 이후 자바스크립트 - ES6+
// 2015년 이전 자바스크립트 = ES5

myName = `둘리`; // 백틱 : ES6+ 문법
console.log(typeof myName);

// 백틱은 엔터 사용 가능
let htmlTag =
`<ul>
  <li>사과</li>
  <li>바나나</li>
</ul>`;
console.log(htmlTag)

// '', ""은 엔터 사용 불가
htmlTag = '<ul>\n  <li>사과</li>\n  <li>바나나</li>\n<ul>'
console.log(htmlTag);

// x월 x일은 xxx날입니다.
let month = 12;
let day = 25;
let anniversary = '크리스마스';

let sentence = month + '월' + day + '일은 ' + anniversary + '입니다.';
console.log(sentence);

sentence = `${month}월 ${day}일은 ${anniversary}입니다.`
console.log(sentence);
