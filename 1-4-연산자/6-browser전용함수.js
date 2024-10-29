console.log(10 * 3);

/* 
 브라우저 전용함수 : nodejs환경에서는 실행 불가

 alert(): 브라우저 출력창을 띄움
 prompt(): 브러우저 입력창을 띄움
 confirm(): 브라우저 확인/취소창을 띄움;
 */

// alert('야호!');

// let userName = prompt('Cual es tu nombre?');
// alert(`Bienvenido, ${userName}`);

let num1 = +prompt("introduzca su numero favorito");
let num2 = prompt("introduzca su segundo numero favorito");
alert(`당신이 좋아하는 숫자의 합은 ${num1 + num2}입니다`); // *** 숫자가 아닌 문자로 인식됨!!!
alert(`당신이 좋아하는 숫자의 합은 ${Number(num1) + Number(num2)}입니다`);
// 간편하게 하려면, prompt 앞에 +을 입력하면 숫자로 암묵적 형 변환
num1 = +prompt("introduzca su numero favorito");
num2 = +prompt("introduzca su segundo numero favorito");
alert(`당신이 좋아하는 숫자의 합은 ${num1 + num2}입니다`); // *** 숫자가 아닌 문자로 인식됨!!!

confirm('뭐지');

