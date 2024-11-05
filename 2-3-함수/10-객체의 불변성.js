// 자바스크립트 변수는 무조건 const로 선언하세요.
// 그리고 변경해야 할 변수만 부분적으로 let으로 교체
const dog = {
  name: '해피',
  kind: '진돗개',
  age: 3
};
// const 변수가 객체거나 배열 일 때 : 속성 값은 변경하나, 변수 재할당은 불가
dog.age = 4;

// const 변수가 객체거나 배열 일 때 : 속성 값은 변경하나, 변수 재할당은 불가
/* dog = {
     name: '초코'
   };
  console.log(dog); 
  ==> 에러 */ 

dog.kind = '삽살개';
console.log(dog);