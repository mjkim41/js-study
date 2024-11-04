// 두 수를 전달받아 해당 수의 합을 리턴
function addAll(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}


addAll([10, 20, 30]);
let r3 = addAll([10, 20, 30]);
console.log(r3);

// ---  JS ES6+ 스프레드(...)
// : 값을 배열이나 객체로 펼쳐서 새로운 배열이나 객체를 만들 때 사용
function addAllES6(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

let r4 = addAllES6(5, 8, 3);
console.log(r4);

