
// -- 난수 생성 
let randomNum = Math.random(); // 0 <= ~ < 1 사이의 부동 소수점 난수 생성
randomNum = Math.random() * 100 ; // 0 <= ~ < 100 사이의 부동 소수점 난수 생성
randomNum = Math.floor(Math.random() * 100); // 0 <= ~ < 100 사이의 정수 생성
randomNum = Math.floor(Math.random() * 100)+1; // 1 <= ~ <= 100 사이의 정수 생성

// console.log(randomNum);

// --  정수 난수 생성 공식
// randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// -- 47~65 사이 숫자
randomNum = Math.floor(Math.random() * 19) + 47;


// -- 1~10사이의 숫자 중 랜덤으로 숫자 하나를 생성하여
// 해당 숫자가 7이 나올 때까지 반복해서 숫자를 생성한다.
let num = 0;
let count = 0;
while (num !== 7) {
  num = Math.floor(Math.random() *10) +1;
  console.log('랜덤 정수를 만들었습니다.');
  count++;
}
console.log(`반복문 종료! num = ${num}`);
console.log(`${count}번 만에 7 발견`);

