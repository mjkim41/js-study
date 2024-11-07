const student = {
  stuName: '뽀로로',
  age: 5,
  birthDay: '2020-01-03',
};

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

console.log('=================');

const divStyle = {
  'font-size': '16px',
  'border-radius': '50%',
};

const { 'font-size': fontSize, 'border-radius': bddr } = divStyle;

// console.log(divStyle['font-size']);
console.log(fontSize);
console.log(bddr);

// 아래에서 parameter 부분 {name,age}의 의미 
// : let {name, age} = 객체명;
// -> 디스트럭쳐링

const myPetInfo = ({ name, age }) => {
  console.log(`우리 애완동물 이름은 ${name}입니다.`);
  console.log(`우리 애완동물 나이는 ${age}입니다.`);
};

const dog = {
  name: '초코',
  age: 3,
  kind: '진돗개',
  injection: true,
};
const cat = { name: '나비', age: 2 };

myPetInfo(dog);
myPetInfo(cat);

console.log('==============');

const { kind, injection, ...dogRest } = dog;
console.log(dogRest);

// 스프레드
// cat의 원본은 유지하면서 새 객체에 injection프로퍼티를 추가하고싶다
const copyCat = {
  ...cat,
  injection: false,
  age: 10
};

console.log('========');

console.log(cat);
console.log(copyCat);




