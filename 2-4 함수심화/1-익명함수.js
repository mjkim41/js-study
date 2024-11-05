// !!!!!!!!!!! 익명함수 (anonymous function) vs 일반함수 :
// 다른 함수에 함수를 전달하거나(=매개변수로 사용되거나),
//  함수가 함수를 리턴할 때(=함수 호출 시 함수가 호출되면)는 주로 일반함수보다 익명함수 사용
// 그 이유는, 한 번 사용하는 함수인데 굳이 일반함수로 해두면
//  함수가 호출된 후에 익명함수처럼 가비지 컬렉터에 의해 메모리 정리되지 않음







/*
 !!!!!!!! 함수 선언식 (function declaration) vs 함수 표현식 (function expression)
 선언식은  호출보다 선언이 아래에있어도 작동(hoisting) 
 표현식은 선언 후에만 호출 가능
*/

// 함수 선언식 : hoisting 
multiply(3, 4);

function multiply(n1, n2) {
  console.log('곱셈 함수!');
  return n1 * n2;
}

// 함수 표현식 (function expression) : 밑에 식에서 const r1 = add(10, 20)을 함수 표현식 보다 위에 써줬으면 에러남
const add = function (n1, n2) {
  console.log('덧셈 함수!');
  return n1 + n2;
};

console.log(typeof add); // 출력값 : function
const r1 = add(10, 20);
console.log(`r1: ${r1}`);












console.log('======arr 예시 출력값 =========');
const arr = [
  10,
  'hello',
  true,
  [1, 2, 3],
  { age: 3, name: '영희' },
  function () { 
    console.log('배열안의 함수!');
  }
];

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  ///
// 아래에서 function ()을 호출하려면 arr[1]이 아니라 arr[1]() 입력 !!!!
arr[5](); // 출력값 : 배열안의 함수!
arr[5]; // 출력값 없음
console.log(arr[5]); // 출력값 : function
const pooh = arr[5]; // function을 변수에 저장
pooh(); // 출력값 : 배열안의 함수

console.log('=============');







const cat = {
  name: '야옹이',
  age: 5,
  // 메서드: 객체의 기능을 표현
  sleep: function () {
    console.log('쿨쿨쿨zzz');
  }
};


// !!!!!!!! javascript에서는 배열은 사실 객체의 일종임
// 그래서 배열.push, 배열.index로 사실은 아래와 같이 함수가 실행되는 것임
const foodList = {
  0: '짜장면',
  1: '볶음밥',
  2: '탕수육',
  length: 3,
  indexOf: function (item) { },
  push: function(...items) {}
};

console.log(foodList.length);
console.log(cat['name']);
console.log(foodList[0]);



