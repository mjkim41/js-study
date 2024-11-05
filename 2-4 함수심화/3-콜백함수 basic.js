// 아래 함수의 뜻 : callFunction의 매개변수를 함수로 넣으면, 그 함수를 호출하라.
function callFunction(fn) {
  fn();
}
callFunction(function () { console.log("함수 전달!")}); // 출력값 : 함수 전달!












// 일급 함수
// 함수를 마치 하나의 값처럼 사용하여
// 변수에 저장하거나 다른 함수에 전달하거나 리턴할 수 있음
console.log(`============ 2번 ==============`)
let substract = (n1, n2) => n1 - n2;

let orange = substract;
console.log(`orange: ${orange}`); // 출력값 : orange: (n1, n2) => n1 - n2
console.log(typeof orange); // 출력값 : function

const grape = orange(30, 12); // 출력값 없음
console.log(`grape: ${grape}`); // 출력값 : grape: 18







console.log(`============ 3번 ==============`)

function printSubstract(x) {
  // console.log(typeof x); // 에러(매개변수이므로 어떤 값의 형태인지 모름)
  const result = x(10, 4); //!!!!!!! 함수를 매개변수로 받을 거고, 그 함수를 호출해라!!
  console.log(`result: ${result}`);
}
printSubstract(substract); // 출력값 : function
printSubstract((n1, n2) => n1 * n2);
printSubstract((n1, n2) => n1 ** n2);







console.log(`============ 4번 ==============`)

// !!!!!! 함수가 함수를 리턴
const bar = (n1, n2) => () => n1 + n2; 

/* 
위 함수는 아래와 같은 뜻임
const bar = function (n1, n2) {
  return function () {
    return n1 + n2;
  }
}
  */

const foo = bar(5, 8);
console.log(foo); // !!!! !출력값 : [Function (anonymous)]

const goo = foo();
// console.log(`goo: ${goo}`); // !!!! 출력값 : goo 13
