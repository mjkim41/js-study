//result에는 56이 리턴되어야 함.

function min(...numbers) {
  return Math.min(...numbers);
}

let result1 = min(134, 56);
console.log(`result1: ${result1}`);

let result2 = min(134, 1000, 200);
console.log(`result2: ${result2}`);

function isEven(n1) {
  if (n1 % 2 === 0) {
    return true;
  } else {
    return false;
  } 
}


let result3 = isEven(3);
console.log(`result3: ${result3}`);


// n 개의 정수중 최소값을 구해서 반환하는 함수

function min2(...numbers) {
  let minimum = numbers[0];
  for (let i = 0; i < numbers.length-1 ; i++) {
    if (numbers[i] < numbers[i+1]) {
      minimum = numbers[i];  
    } else {
      minimum= numbers[i+1];
    }
  }
  return minimum;
}

let result4 = min2(9, 76, -90, -1000, 555, 780);
// -1000이 출력되어야 함
console.log(result4);


