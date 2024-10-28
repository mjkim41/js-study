// 변수(variable) : 변경 가능한 데이터 

// 상수(constnat) : 변경 불가능한 데이터

// 세율
const TAXRATE = 0.2;
// TAXRATE = 0.4; <- 에러(CONST는 상수임)

// 내 돈
let myMoney = 10000;
myMoney = 20000
console.log('당신의 세후 소득은: ', myMoney - (myMoney * taxRate));
