let day = '월요일';
let isCelebration = false;

switch (day) {
  case '월요일':
    console.log('월요일입니다');
    break;
  case '화요일':
  case '수요일':
  case '목요일':
    console.log('화~목요일');
    break;
  case '금요일':
    console.log(`드디어 금욜`);
    isCelebration = true;
    break;
  default:
    console.log(`즐주`);
    isCelebration = true;
    break;
}

(isCelebration === true) ? console.log(`기분좋아~`) : console.log(`기분 안좋아~`);
