// !!매개변수 default값 설정 : 매개변수=''
function greet(language='한국어') {
  switch (language) {
    case '한국어' :
      console.log(`안녕하세요`);
      break;
    case 'Catalan' :
      console.log(`Bon dia`);
      break;
    case 'Spanish' :
      console.log(`Buenos dias`);
      break;
    default :
      console.log(`뭐꼬`);
      break;
  }
}

greet(); // default값 한국어 이므로 안녕하세요 출력
greet(`Catalan`);

// !!!!!!! return 의 역할 (1) : 광역변수로 바꿔주는 역할
// x ~ y 사이의 랜덤 정수를 생성해주는 함수
function randomIntGenerator (x, y) {
  return Math.floor(Math.random() * (y - x + 1) + x);
}

randomIntGenerator (1, 6);
randomIntGenerator(); // !!!!!!parameter가 undefined 이므로, 결과는 NaN으로 출력됨

let randomInt = randomIntGenerator(5, 10);

if (randomInt === 7) {
  console.log(`7입니다`);  
} else {
  console.log(`${randomInt}는 7이 아닙니다`);
}


function infiniteHello() {
  for (let i = 0 ; i < 5; i++) {
    console.log(`hello`);
  }
}

infiniteHello();
