let a = 5;
let b = '5';

// javascript만의 unique함 : 모든 동등비교는 === 사용
console.log(a == b); // == : 보이는 값이 똑같은지 비교 (출력값 : true)
console.log(a ===b); // === : 실제 값이 똑같은지 비교 (출력값 : false)

console.log(a != b); // != : 보이는 값이 다른지 비교 (출력값 : false)
console.log(a !== b); // !== : 실제 값이 다른지 비교 ( 출력값 : true)

console.log('=================');

// *****!!!!!!!
console.log('0' == ''); // false
console.log(0 == ''); // **true**
console.log('0' == 0); // true
console.log(false == 'false'); // **false**
console.log(false == 0); // **true**

console.log('=== 사용');
console.log('0' === ''); // false
console.log(0 === ''); // false
console.log('0' === 0); // false
console.log(false === 'false'); // false
console.log(false === 0); // *false*

console.log('=================');
// 문자 비교 
let password = 'abc1234';
console.log(password === 'abc1234');

// **** 문자 비교
console.log('a' > 'A'); // 소문자 > 대문자 
console.log('A' < 'C'); //  A < C
console.log('가' < '나'); //  가 < 나
console.log('ace' > 'ade'); // acde < ade
console.log('A' < '가'); // 한글이 이김
