var num = 10 + 20;
console.log(num * 2);

var doubleNum = num * 2
console.log(doubleNum * 2);

num = 10;

console.log(num * 2)

// 변수 선언 (생성) 
// (1) 숫자로 시작하거나 숫자만으로 지정 불가(컴파일러나 인터프리터가 이를 변수로 인식하는 데 혼란을 줄 수 있습니다. 예를 들어, 1variable이 숫자 1과 variable로 해석될 수 있는 경우가 발생할 수 있습니다.)
// (2) 이름을 지을 때 띄어쓰기 불가능
// (3) 시작글자는 대문자로
var my_friend_name; // snake case : SQL, python
var myFriendName; // camel case : Java, Javascript

// (4) 특수문자는 _, %만 가능
var $friendName_;

var userName;
console.log(username);

// 변수의 초기화(initialized) : 값을 저장
userName = '김철수';
console.log(userName);

// 변수를 선언하면서 초기화
var address = '서울시';
address = '경기도'; // 변수값 수정(수정시에는 var 안 붙임)
