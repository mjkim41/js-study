// while은 반복횟수 모를 때 보통 씀 (for은 반복횟수가 정해있을 때(식 구성 상 횟수가 한 눈에 보이므로).)
let i = 1;
while (i <= 4) {
  console.log(`${i}번 학생 안녕하세요`);
  i++;
}

console.log(`=============`);

// 150안에 있는 2의 배수를 가로로 출력하기
let n = 2;
let result = '';
while (n <= 150) {
  result += `${n} `;
  n += 2;
}
console.log(result);
console.log(`=============`);


// 1~50 사이 6의 배수 출력하기
let j = 1;
let result1 = ``;
while (j <= 50) {
  if (j % 6 === 0) {
    console.log(j);
  }
  j++;
}
console.log('========');

// --- 1~700사이 7의 배수 이면서 14의 배수가 아닌 수 출력하기
let a = 1;
while (a <= 700) {
  if (a % 7 === 0 && a % 14 !== 0) {
    console.log(a);
  }
  a++;
}

