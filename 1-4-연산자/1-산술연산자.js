// js는 나누셈을 수행할 때 실수 나누셈을 수행 (소수점이 도출됨)
console.log(27 / 5);

// -- 나눗셈의 몫만 구하기
console.log(Math.floor(27/5));

console.log(27/5);


// -- 나머지 연산 : %
console.log(27 % 5);

// 뒤의 숫자가 더 크면 앞의 숫자가 그대로 나머지 몫은 0
console.log(8 % 10); // -> 출력값 : 8

// -- 0으로 나머지 반환하면 : NaN (FYI. 0으로 나누기하면 : ifinity) 
console.log(8 % 0); 

// == 제곱 연산 (ES6+) : **
console.log(2 ** 4);




console.log('==================');

// -- 증감 연산자(java에서도 사용 가능)
let x = 3;

x++; // 숫자 1 증가
++x;
console.log(`x: ${x}`); // 출력

x--; // 숫자 1 감소
--x;
console.log(`x: ${x}`); // 출력




console.log('==================');


// --- 전위 연산, 후위 연산
let n1 = 10;
let n2 = ++n1;
console.log(`n1: ${n1}, n2: ${n2}`); // n1=11, n2=11

let n3 = 10;
let n4 = n3++;
console.log(`n3: ${n3}, n4: ${n4}`); // n1=11, n2=10

let n5 = 10;
let n6 = ++n5;
console.log(`n5: ${n5}, n6: ${n6}`); // n1=11, n2=11

let myNum = 3;
myNum += 3; // 복합연산자 : myNum에 3을 더해서 집어넣어라
myNum -= 6;
myNum *= 5;
myNum %= 4
myNum **= 3
console.log(`myNum: ${myNum}`);

let xx = 3;
// 아래 두 개 결과는 같지만 xx++;가 처리속도 더 빠름 
xx += 1;
xx++;