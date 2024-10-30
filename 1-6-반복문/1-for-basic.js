// 초기변수세팅; 끝 조건식; 변수증감식
for (let n = 1; n<= 50; n++) {
  console.log(`${n}번 학생 안녕하세요`);
}

for (let i = 0; i < 5; i++) {
  console.log('안녕');
}


// 구구단 2단 출력
let level = 7;
for (let line = 1; line <= 9; line++) {
  console.log(`${level} x ${line} = ${level * line}`); }
console.log('반복문 종료');

console.log(`==========`);

// 1 ~ 10까지의 누적합 == 55


let total = 0;

for(let n = 1; n <= 10; n++) {
  total += n;
}
console.log(`합은${total}입니다.`);


console.log('===========');
// countdown 세기

for(let i = 10; i <= 10; n++) {
  console.log(n);
}

