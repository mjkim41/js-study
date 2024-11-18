
// 다른 js파일에서 데이터(변수, 상수, 함수, 클래스) 불러오기
import { $btn as $button } from './getDOM.js';
// !!! 이름 변경하여 가져올 때 : as
import { clickHandler as cHandler } from './eventHandler.js';
// import 뒤에 {} 없으면 객체화 되어 파일 전체를 가져온 것 
import xyz from './calculation.js';
import { food } from './calculation.js';

const $btn = 'button!';

const { add, sub } = xyz;

console.log(add(10, 30));
console.log(sub(50, 15));

food.foodName = '짬뽕';
console.log(food.foodName);


// 버튼에 클릭이벤트 등록
$button.addEventListener('click', cHandler);