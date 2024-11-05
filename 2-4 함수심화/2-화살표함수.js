// !!! 화살표 함수 방식 (ES6+)  !!!!!!!!!!!!!!!!!!!!!
// 1. 기존 방식
const add1 = (n1, n2) => {
  return n1 + n2;
}

//!!!! 한 줄 이면 중괄호 생략 가능 (단, return 일 때 중괄호 생략하면 return도 생략해야 함)
const sayHello = nickname => console.log(`${nickname}님, 안뇽?`);
sayHello('메롱'); 

const add2 = (n1, n2) => n1 + n2;
// const add3 = (n1, n2) => return n1 + n2; <- 불가(return 빼야 함)

// 매개변수가 한 개 라면 매개변수에 ()도 생략 가능
const pow = n => n ** 2;
// 위에 식은 const pow = function (n) { return n ** 2}; 와 같음 

