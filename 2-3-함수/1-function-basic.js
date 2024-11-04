// 이름을 입력하면, 이름을 첫글자는 대문자로 바꾼 후 '이름님 안녕하세요' 로 출력해주는 함수
function greet(name) {
  // !!!!!! 이름 소/대문자 변환 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  console.log(`${formattedName}님 안녕하세요`);
}

greet('anGELa');

