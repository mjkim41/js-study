// --- 나이로 몇년생인지 구하기 
let userName = prompt('뭐야?');
let userAge = prompt("당신의 나이는?");
let currentYear = new Date.getFullYear();
let birthYear = currentYear - userAge + 1; // !!!암묵적 형 변환으로 알아서 숫자로 변환됨
alert(`${userName}님은 ${birthYear}년생 이시군용!`);






