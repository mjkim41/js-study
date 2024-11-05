const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
  },
  {
    account: 'banana',
    userName: '빠나나왕',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
  },
];


// 회원목록에서 회원의 직업만 추출해서 새 배열로 리턴
// [추노, 과일, 발렛파킹, 게이머]
function mapByUserJob() {
  const mappedArray =[];

  for (const user of userList) {
    mappedArray.push(user.job);
  }

  return mappedArray;
}

let test = mapByUserJob();
console.log(test);

// 회원 목록에서 회원의 주소만 추출해서 새 배열로 리턴
// [서울, 서울, 경기, 서울]
function mapByUserAddress() {
  const mappedArray = [];
  
  for (const user of userList) {
    mappedArray.push(user.address);
  }

  return mappedArray;
}

let test1 = mapByUserAddress();
console.log(test1);

// 회원 목록에서 회원의 두번째 취미만 추룰해서 새 배열로 리턴
// [축구, 테니스, 축구, 테니스]
function mapByUserHobbys() {
  const mappedArray = [];
  
  for (const user of userList) {
    mappedArray.push(user.hobbys[1]);
  }

  return mappedArray;
}

let test2 = mapByUserHobbys();
console.log(test2);

// call back 으로 구현하기!!!!!!!!!!!!!!!!!!!!!!!!!!!!
mappedArray.push(user.job);
mappedArray.push(user.address);
mappedArray.push(user.hobbys[1]);
