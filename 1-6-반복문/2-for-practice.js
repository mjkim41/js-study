// 150안에 있는 2의 배수를 출력하기

let result = '';
for (let i = 2; i <= 150; i+=2) {
  result += `${i} `;
}
console.log(result);
console.log('========');

// 1~50 사이 6의 배수 출력하기
for (let i = 6; i <= 50; i++) {
  if(i % 6 === 0) {
    console.log(i)
  }
}
console.log('========');

// 1~700사이 7의 배수 이면서 14의 배수가 아닌 수 출력하기
let count = 0;
for (let i = 1; i <= 7777; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log(`3의 배수의 총 개수: ${count}`);