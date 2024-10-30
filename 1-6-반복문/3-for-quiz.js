// 특졍 숫자를 입력받고, 1부터 해당 숫자까지 범위의 2의 제곱수를 가로로 출력
let n = prompt('왜 안뜨지지');
let total = 0;
let result = '';
for (let i = 1; total <= n; i++) {
  total = 2 ** i;
  if(total <= n) {
    result += `${total} `;
  }
}

// -----------------------------------------------

let inputNumber = ('양의 정수를 입력하세요');
let resultText = ``;

for (let i = 2; i <= n; i *= 2) {
  result += `${i} `;  
}
alert(resultText);
