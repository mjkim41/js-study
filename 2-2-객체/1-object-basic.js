let puppy1 = {
  name: '해피', // 프로퍼티(속성)
  color: 'blue', // 프로퍼티키: 프로퍼티 밸류
  age: 4,
  'test k': '몽쉘 먹기' // 원래 프로퍼티 키도 변수명의 규칙과 동일한 규칙을 갖지만,
  // ''를 쓰면 가능
};


let puppy2 = {
  name: '초코',
  color: 'brown',
  age: 7
};

// 전체출력 시
console.log(puppy1);

// 프로퍼티 키만 출력 : Object.keys(객체명)); -> 배열로 반환
console.log(Object.keys(puppy1));

// 프로퍼티 값만 출력 : ObJECT.values(객체명); -> 배열로 반환
console.log(Object.values(puppy1));

// 특정 프로퍼티 key의 값 출력
console.log(puppy1.age);
console.log(puppy1['age']);
