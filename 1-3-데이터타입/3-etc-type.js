// 논리 타입 (boolean)
let flag = false;
console.log(typeof flag);

// bolean는 전체 소문자로 써야 함
// let result = TRUE; <- 에러 //
// result = True; <- 에러 //
let result = true;
console.log(result);

result = 10 > 5;
console.log(result); // <- true


// null 타입 = 부존재 (명시적인 없음)
let props = null;
console.log(typeof props) // <- obejct라고 출력됨

// undefined - 변수가 초기화 되지 않은 상태
let yourName;
console.log(yourName); // <- undefined 라고 출력됨(에러 x)


