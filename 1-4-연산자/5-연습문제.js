console.log(`연습문제1`); 
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x % y); // 1

//아래 코드에서 ==와 === 연산자의 차이를 확인하고, 각각의 출력 결과를 예상해 보세요.
console.log(``);
console.log(`연습문제2`);
 
let num1 = '100';
let num2 = 100;

console.log(num1 == num2); // true
console.log(num1 === num2); // false
console.log(num1 != num2); // false
console.log(num1 !== num2); // true

// 아래 코드의 실행 결과를 작성하고, 각 연산자의 결과가 왜 그렇게 나오는지 설명해 보세요.
console.log(``);
console.log(`연습문제3`);

let a = 5;
let b = 10;

let result1 = (a > 3) && (b < 15); // true
let result2 = (a === 5) || (b === 20); // true
let result3 = !(a < b); // -- false

console.log(result1);
console.log(result2);
console.log(result3);
