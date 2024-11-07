const student = {
  stuName: '뽀로로',
  age: 5,
  birthDay: '2020-01-03',
};

// 객체의 각 프로퍼티 값에 대해서 변수 생성하기
const {stuName, birthDay} = student; //  studentName이라는 property key의 값을 stuName이라는 변수명을 가진 변수에 저장
console.log(stuName);

// 변수명을 바꾸기
const {birthDay: 생일} = student; // birthDay(프로퍼티 키)에 저장된 값을 생일이라는 변수를 생성하여 저장한다
console.log(생일);