// day 변수의 값에 따라 주말 또는 평일 여부를 출력하는 코드를 작성하세요.
// day가 토요일이나 일요일일 때 주말로 간주합니다.
// 일부 코드를 채워 넣으세요.

let day = '일요일';

switch (day) {
  case '토요일':   
  case '일요일':   
    console.log('주말입니다.');
    break;
  default:
    console.log('평일입니다. 일하세요.'); 
}



// `weather`가 특정 날씨 조건일 때 **준비물**을 안내하는 메시지를 출력하는 switch 문을 작성하세요.
// 조건에 맞는 코드 부분을 채워 넣으세요.
// **조건**:
// - `맑음`: `"선글라스를 챙기세요."`
// - `비`: `"우산을 챙기세요."`
// - `눈`: `"따뜻하게 입으세요."`
// - 그 외: `"날씨 정보를 알 수 없습니다."`
let weather = '눈';  

switch (weather) {   
  case '맑음':
    console.log(`선글라스를 챙기세요.`);            
    break;
  case '비':
    console.log('우산을 챙기세요');
    break;
  case '눈':
    console.log('따뜻하게 입으세요.');
    break;           
  default:
    console.log('날씨 정보를 알 수 없습니다.');
}


// `food` 값에 따라 해당 **음식의 요리 지역**을 출력하는 switch 문을 작성하세요. 빈칸을 완성하세요.
// **조건**:
// - `피자`: `"이탈리아 요리입니다."`
// - `타코`: `"멕시코 요리입니다."`
// - `스시`: `"일본 요리입니다."`
// - `바게트`: `"프랑스 요리입니다."`

let food = '피자'; 

switch (food) {
  case '피자':
    console.log(`이탈리아 요리입니다`); 
    break;
  case '타코':
    console.log('멕시코 요리입니다.'); 
    break;
  case '스시':
    console.log('일본 요리입니다.'); 
    break;
  case '바게트':
    console.log('프랑스 요리입니다.');
    break;
  default:
    console.log('해당 음식에 대한 정보가 없습니다.');
}




