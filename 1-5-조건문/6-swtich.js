let day = '수요일';

// switch 
// 범위 비교 불가
switch (day) {
  case '월요일':
    console.log('새로운 한 주가 시작되었습니다.');
    break;
  case '화요일':
    console.log('화요일이네요');
    break;
  case '수요일':
    console.log('한 주의 중간입니다');
    // break; 브레이크 안하면 아래 case까지 표현됨
  case '목요일':
    console.log('내일이면 금요일!');
    break;
  case '금요일':
    console.log('칼퇴하세용');
    break;
  default: 
    console.log('즐주~'); 
}

// swtich or 조건!!
day = '월요일';

switch (day) {
  case '월요일':
  case 'Monday':
    console.log('새로운 한 주가 시작되었습니다.');
    break;
  case '화요일':
    console.log('화요일이네요');
    break;
  case '수요일':
    console.log('한 주의 중간입니다');
    break; 
  case '목요일':
    console.log('내일이면 금요일!');
    break;
  case '금요일':
    console.log('칼퇴하세용');
    break;
  default: 
    console.log('즐주~'); 
}
