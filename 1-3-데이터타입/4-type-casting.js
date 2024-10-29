let num = 20;
let address = `서울시`;
let result = `10`;

// 타입이 다르면 연산 불가
console.log(num + result);

//암묵적 형 변환 (1): 문자 + 숫자 = 숫자를 문자열로 자동 변환
console.log(10 /4) // 2.5 (java하면 결과 값 2)

//암묵적 형 변환 (2) : 문자 +제외한 연산 숫자 = 문자를 숫자열로 자동 변환
console.log(num - result);

const operating = num + result;
console.log(operating);

console.log(num * address); // NaN

//암묵적 형 변환 : 0은 true, 1은 false로 변환 
let money = 1;
let fruits = '사과';

// money값이 1이면 true로 인식, 0이면 false로 인식
if (money) {
  console.log(`${fruits}를 살 수 있어요`);
}

// 명시적 형 변환
const n1 = '10';
const n2 = String(20);

const n3 = Number(n1) + n2; // 명시적 형 변환
console.log(`n3: ${n3}`);

