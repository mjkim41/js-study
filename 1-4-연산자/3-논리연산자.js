// 피연산자 (operand) = 연산의 대상이 되는 데이터

// 산술연산 - 피연산자가 숫자여야 함
console.log(3*4);
console.log('김철수' * true); // --- 출력값 : NaN

// 비교연산 - 피연산자가 숫자 또는 문자
// -- 논리연산 - 피연산자가 논리여야 함
let t = true;
let f = false;

// && : 양쪽 항이 모두 true인 경우만 true
console.log(`===== 논리연산: and ======`)
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

let height = 145;
let age = 5;
console.log(height > 140 && age > 6);

// **** || : or
console.log(`===== 논리연산: or ======`)
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// ----- 논리 반전
console.log(`===== 논리반전 ======`)
console.log(!t); // 출력값 : false
console.log(!f); // 출력값 : true