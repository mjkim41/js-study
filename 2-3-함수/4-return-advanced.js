
// return은 함수 전체를 중단, break는 반복문을 중단
function callYourName(name) {
  let forbiddenNames = ['바보', '멍청이'];
  if (forbiddenNames.includes(name)) {
    console.log('비속어는 사용하지 말아주세요');
    return; // 여기서 break 사용 시, 00님 환영합니다까지 작동함
  }
  console.log(`${name}님, 환영합니다`);
};

callYourName('midol');
callYourName('바보');
console.log(`======================`);


// return은 함수 자체를 중단, break는 반복문만 중단
function loop(n) {
  while (true) {
    if (n === 0) {
      console.log('break!');
      break;
    } else if (n === 1) {
    console.log('return!');
    return;
    }
  }
  console.log(`end`);
}

loop(0); // 반복문만 중단
loop(1); // 함수까지 중단
console.log(`======================`);


// 리턴은 언제나 하나의 값만 반환 가능!
console.log(`========================`);

// 숫자 2개를 전달하면 해당 숫자의 덧셈결과, 뺼, 곱, 나눗셈 결과를 반환
function operate(n1, n2) {
  // 아래는 변수 1번만 사용하므로 굳이 쓸 필요 없음
  // let addResult = n1 + n2;
  // let subResult = n1 - n2;
  // let multiResult = n1 * n2;
  // let divResult = n1 / n2;

  return resultList = {
    addResult: n1 + n2,
    subResult: n1 - n2,
    multiResult: n1 * n2,
    divResult : n1 / n2
  };
}

console.log (`------------------------- operate 함수(2개 인자) 연습문제--------------`)
let result = operate(10, 5);
console.log(`덧셈: ${result.addResult}`);


console.log (`------------------------- operate 함수(n개) 연습문제--------------`)
// 숫자 n개를 전달하면 해당 숫자의 덧셈결과, 뺼, 곱, 나눗셈 결과를 반환

// 덧셈 식
function calculateSum (...numbers) {
  let totalSum = 0;
  for (let number of numbers) {
    totalSum += number;
  }
  return(totalSum);
}

let a = calculateSum(1, 2, 3);
console.log(a);

// !!!!!!!!!!!! 뺼셈 식 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function calculateRest(...numbers) {
  let totalRest = numbers[0];
  for (let i = 1; i < numbers.length; i++) { // 두 번째 숫자부터 시작
    totalRest -= numbers[i]; // 두 번째 숫자부터 차례로 뺌
  }
  return totalRest;
}

// 곱셈 식
function calculateMultiply (...numbers) {
  let totalMultiply = 1;
  for (let number of numbers) {
   totalMultiply *= number;
  }  
  return totalMultiply;
 }
 

function operate1 (...numbers) {
  console.log(calculateSum(...numbers)); ///!!!!!!!!! ... 을 생략할 경우, calculateSum 함수에서 인자가 [[numbers]]로 인식됨 !!!!!!!!!!!!!!!!
  console.log(calculateRest(...numbers));
  console.log(calculateMultiply(...numbers));
}

operate1(2, 4, 8);
