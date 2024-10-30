// 숫자를 입력하면, 그 안의 약수를 출력하고 개수도 세기

let targetNumber = +prompt('숫자를 입력하세요');
let resultText = ``;
let count = 0;

for(let i = 1; i <= targetNumber; i++) {
  if(targetNumber % i === 0) {
    resultText += `${i}\n`
    count++;
  }    
}
alert(`\n약수의 개수는 ${count}개입니다.`);


