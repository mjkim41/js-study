// 일급 함수 : 함수를 값으로 표현하여 다른 함수에 전달하거나 
//             함수의 리턴으로 함수를 보낼 수 있는 케이스

function calculate() {
  console.log('calculate 호출');
  // 중첩함수, 헬퍼함수
  function add(n1, n2) {
    console.log('add 콜');
    return n1 + n2;
  }
  // 함수 안에서는 호출이 됨
  return add;
}

const result = calculate();
// add(); 콜 안됨
console.log(`result: ${result}`);

const r1 = result(10, 20);
console.log(`r1: ${r1}`);

console.log('========================');

/*
function foo() {
  function bar() {
    return 10;
    }
    return bar;
    }
    */
   const foo = () => () => 10;
   
   const fas = foo();
   const r2 = fas();
   console.log(`r2: ${r2}`);

   console.log('========================');

   // 카운트를 0부터 1씩 증가시키는 함수
  //  function increase() {
  //   let count = 0;
  //   return ++count;
  //  }
  //  console.log(increase()); // 1
  //  console.log(increase()); // 1

  let count = 0;
  // 취미 개수 1씩 올려주는 함수
  function increaseHobbyCount() {
    return ++count;
  }
  // 사람 수 1씩 올려주는 함수
  function increaseHumanCount() {
    return ++count;
  }

  console.log(increaseHobbyCount());
  console.log(increaseHumanCount());
  console.log(increaseHobbyCount());