
const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;

// !!! 변수 내보내기 - 변수는 export하는 순간 const로 바뀜
// 따라서 아래에서 const food로 객체화 하지 않을 경우,
// import 한 파일에서 해당 변수의 값을 변경할 수 없음(객체는 값은 변경 가능하니까..)
let foodName = '짜장면';
const food = {
  foodName: foodName
}

export { food };

// !! 내보낼 데이터가 단 한 개면 export default
export default {
  add: add,
  sub: sub
};