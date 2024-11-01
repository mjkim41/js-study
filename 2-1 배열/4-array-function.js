let foodList = ['닭꼬치', '볶음밥', '족발', '파스타'];

// indexOf() : 배열의 특정 요소가 몇 번 인덱스에 '처음' 있는지 알려줌
let idx = foodList.indexOf('볶음밥');
console.log(idx);


// 배열의 특정 요소가 몇 번 인덱스에 있는지 모두 찾는 법 :
let food = ['볶음밥', '짜장', '짬뽕', '탕수육', '볶음밥', '볶음밥'];
let indexList = []; // 인덱스 번호를 담을 배열 생성
let keyword = '볶음밥'; // 찾고자 하는 값

for (i = 0; i < food.length; i++) {
  if (food[i] === keyword) {
   indexList.push(i); // i번째 index에 찾는 키워드가 있으면, index 번호를 저장 
  }
}
console.log(indexList);

// INCLUDES() : 배열에 특정 요소가 있는지 윰 확인
foodList.includes('파스타');

console.log('=========================');

// slice() : 배열을 원하는 만큼 분할해서 복사배열로 리턴
let numbers = [0, 1, 2, 3, 4, 5, 6];

let slicedNumbers = numbers.slice(1, 3);
console.log(`slicedNumbers: `, slicedNumbers);
console.log(`numbers: `, numbers);

let copy1 = numbers.slice(3); // end 생략시 끝까지 분할
console.log(copy1);
let copy2 = numbers.slice(); // 둘다 생략시 처음부터 끝까지 -> 전체복제
console.log(copy2);

// splice() : 배열의 요소를 추가하거나 삭제 (중간에서 작업 가능)
// 배열 원본이 손상됨 - 안전한 작업을 위해서는 복사하고서 작업
console.log('=======================');

console.log(foodList);

foodList.splice(2, 1); 
console.log(foodList);

foodList.splice(0, 1, '마라탕');
console.log(foodList);

// 중간 삽입 기능
foodList.splice(2, 0, '짜장면');
console.log(foodList);