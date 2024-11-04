// return의 역할 (1) : 함수가 생성한 결과를 함수 밖으로 가져가는 것
// 리턴이 있는 함수는 함수실행 후의 결과를 다른 변수에 저장 가능

function add(n1, n2) {
  result = n1 + n2;
  console.log(`result: ${result}`);
  return result;
}

let r1 = add(2, 4);
let r2 = add(5, 2);

console.log(r1 * 2);



//------------------------------------------------------------------

function multiply(n1, n2) {
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

let r3 = multiply(3, 2);
console.log(r3 + 100); // !!!!!!!!!!!! 출력값 : NaN (앞에서 multiply의 계산 결과를 따로 return으로 저장하지 않았으므로)