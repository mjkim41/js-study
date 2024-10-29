// 1. 변수 재선언 시 에러가 나지 않음
var apple = 10;
var apple = 20;
console.log(apple); //에러가 뜨지 않고 20이 출력됨


// 블록 레벨 스코프 지원 x - 블록안에서만 임시사용 불가
var num = 10;
if (true) {
  var num = 20;
  console.log('if 안에 num: ', num); // 20
}
console.log('if 밖의 number: ', num); // 20

let num1 = 10;
if (true) {
  let num1 = 20;
  console.log('if 안에 num: ', num); // 20
}
console.log('if 밖의 number: ', num1); // 10

// 3. hoisting : 변수 선언을 자동으로 위로 끌어올림
let ironman = '토니 스타크'; // undefined
console.log(ironman);

console.log(test);
var test = 1.3;

console.log(10/3);