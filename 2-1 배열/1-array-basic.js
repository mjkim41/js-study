let numbers = [10, 20, 30, 40];
console.log(`numbers: `, numbers);

// 배열의 데이터 타입 : object (array는 object의 일부)
console.log(typeof numbers); 

console.log(`array1: ${numbers[1]}`);
console.log(numbers[2] ** 2);

// 배열의 요소(element) 수정
numbers[1] = 999;
console.log(`array1 : ${numbers[1]}`);
numbers[3]++;
console.log(numbers);

// 배열의 총 요소(데이터) 수 : 변수명.length
console.log(`배열의 총 요소 수: ${numbers.length}`);

// 배열의 마지막 요소 접근 : 변수명(변수명.length()-1)
console.log(`배열의 마지막 요소 값: ` + numbers[(numbers.length-1)]);

// 배열의 순회(1) 
console.log(`=================`);
for (i = 0; i < numbers.length; i++) {
  console.log(`${i+1}번째 데이터 : ${numbers[i]}`);
}

// ---- 배열의 순회(2) : for ~ of
// 부분 순회는 불가(ex, 홀수 번째 index만 출력)
console.log(`=================`);
let weekDays = ['월', '화', '수', '목', '금', '토', '일'];

for (let day of weekDays) {
 console.log(`${day}요일`);
}

// 배열 이름 관례 : 복수형, -List 어미



