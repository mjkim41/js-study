// 1. 아래를 삼항 연산자를 사용하여 한 줄로 변환해 보세요.
let score = 92;
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else {
  grade = 'D';
}

// 결과 : 
console.log(grade); // 예상 출력: A

score = 92;
grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'D';
console.log(grade);




// 2. 숫자 3개를 입력하고, 그 중 최소 값을 출력
let A = +prompt('정수 A');
let B = +prompt('정수 B');
let C = +prompt('정수 C'); 
let min = Math.min(A, B, C) 
alert(`최소값은 ${min}입니다`);
// 값에 문자 입력하면, NaN 출력됨 

// + 입력값이 숫자인지 확인하는 기능 추가
if (isNaN(A) || isNaN(B) || isNaN(C)) {
  alert(`숫자를 입력해주세요`);
} else {
  alert(`최소값은 ${min}입니다`);
}

)
