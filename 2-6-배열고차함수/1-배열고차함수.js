const numbers = [1, 2, 3, 4, 5, 6];
const foods = ['제육볶음', '김치찌개', '육개장', '파스타', '된장찌개'];

for (const n of numbers) {
  console.log(n);
}

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 1) {
    console.log(numbers[i]);
  }
}

// foreach() : 배열의 반복문을 처리
// for.. of와 비슷하지만, index 제어 가능 (두번째 parameter로 index를 받을 수 있음)
// for 문과 비슷하지만 심플함
numbers.forEach(function (n) {
  console.log(n);
});                


// 두번째 parameter로 index를 받을 수 있음
numbers.forEach(function (n, i) {
  if (i % 2 === 1) {
    console.log(n);
  }  
});

numbers.forEach(function (n, i, arr) {
  console.log(`n: ${n}`);
  console.log(`i: ${i}`);
  console.log(arr);
  console.log(`=======================`);   
})

for (const food of foods) {
  console.log(food);
}

foods.forEach((food, index) => {
  console.log(`${food} 존맛탱, index:${index}`);
});

function forEach(callbackFn) {
  for (let i = 0; i < numbers.length; i++) {
    callbackFn(numbers[i], i);
  }
}




console.log(`==========================================`)
console.log(`==========================================`)
console.log(`==========================================`)
const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];

userList.forEach((user) => {
  console.log(`제 이름은 ${user.userName}, 직업은 ${user.job}이에요!`);
  console.log('-------------');
})

// filter() : 논리 조건에 맞는 데이터를 필터링하여 새 배열로 리턴(원본 회손 x)
const f1 = numbers.filter((n) => {
  return n % 2 === 0;
});

console.log(f1);

const f2 = foods.filter(food => food.includes('찌개'));
console.log(f2);

// 회온목록에서 급여가 400만원 이상인 사람들만 필터링
const f3 = userList.filter(user => user.salary >= 400000);
console.log(f3);

console.log(`-------- map()`);
// map() : 배열에서 특정 데이터들을 추출해서 새로운 배열에 저장
/* 
 filter => 10개의 데이터를 필터링하면 개수가 줄어듬
 map => 10개의 데이터를 매핑하면 개수가 그대로 10개
*/ 

const m1 = numbers.map(n => n ** 2);
console.log(m1);

const m2 = foods.map(food => food[0] + food[1]);
console.log(m2);

// 회원목록에서 회원들의 이름만 매핑
const m3 = userList.map(user => user.userName);
console.log(m3);

console.log('--------------------------');

// numbers에서 숫자들을 추출해서 li 태그로 매핑
const liList = numbers.map(n => `<li>${n}<li>`);
console.log(liList);

// 회원목록에서 급여가 500만원 이상이면서 && 30대인 회원의 이름/직업/나이 추출
const mappedArray = userList
  .filter((user) => user.salary >= 5000000 && user.age >= 30 && user.age < 40)
  .map((user) => ({
    name: user.userName,
    job: user.job,
    salary: user.salary,
    age: user.age,
  }));

console.log(mappedArray);
