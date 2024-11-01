let userInfo = {
  userList: [
    {
      account: 'kim1234',
      password: 'kkk1234',
      username: '김두한',
    },
    {
      account: 'park9876',
      password: 'ppp9999',
      username: '박찬호',
    },
    {
      account: 'hong7766',
      password: 'hhh1234',
      username: '홍길동',
    },
  ],
};



let userID = ''
while (true) {
  userID = prompt('아이디를 입력하세요');
  
  // 아이디 리스트 생성
  let IDList = [];
  for (let a of userInfo.userList) {
    IDList.push(a.account);
  }

  // 없는 아이디이면 질문 반복
  if (!IDList.includes(userID)) {
    alert(`없는 아이디`);
    continue;
  }
  break;
}

// 인덱스 번호 확인
let indexNum = 0;
for (let z = 0; z < userInfo.userList.length; z++) {
  if (userInfo.userList[indexNum].account === userID) {
    indexNum = z;
  }
}

while(true) {
  let userPassword = prompt(`비밀번호를 입력하세요`);
  if(userInfo.userList[indexNum].password !== userPassword) {
    alert(`틀린 비밀번호입니다`);
    continue;
  }
  break;
}
alert(`로그인 성공`);




