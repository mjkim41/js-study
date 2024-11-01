// -- 배열에 요소를 추가하거나 삭제 : push(), pop(), shift(), unshift()

let petList = ['멍멍이', '다이노사우르스', '쿼카', '캥거루'];
console.log(petList);

// push : 배열 맨 끝에 데이터 추가
petList.push(`도롱뇽`, `카멜레오니`);
console.log(petList);

// pop : 배열 맨 끝 데이터 삭제(끝에서 ~개 삭제하려면 splice 사용)
petList.pop(); 
console.log(petList);

// pop한 데이터를 다른 변수에 저장
let x = petList.pop(); 
console.log(x);

// shift() : 배열의 맨 첫 데이터 삭제
// unshift() : 배열의 맨 첫 데이터 추가
petList.unshift(`뻘뻘이`, `호빵이`);
console.log(`unshift : ${petList}`);

petList.shift();
console.log(`shift : ${petList}`);

// ------ pop 심화 : 끝에서 n 번째 ~ 끝 요소 삭제 -----------------
let numberList = [1, 2, 3, 4, 5, 6, 7];

// 지울 갯수 설정
let elementsToDelete = 3;

// 삭제 시작 인덱스 계산
let startIndex = numberList.length - elementsToDelete;

// 요소 삭제
numberList.splice(startIndex ,elementsToDelete);

console.log(numberList);

