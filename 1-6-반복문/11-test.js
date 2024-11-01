// 난이도 설정을 위한 난수 설정 최소 최대값
let minLimit, maxLimit;

// 문제 번호 생성
while (true) {
  let selectedDifficulty = prompt(`
  ~~~~~~~~~~~~~~~~~~~~~ 난이도 설정 ~~~~~~~~~~~~~~~~~~~~~
  [ 1. 상 (3자리수) | 2. 중 (2자리수) | 3. 하 (1자리수) ]
`);

  // 사칙 연산자
  switch (selectedDifficulty) {
    case `1` :
    case `상` :
      minLimit = 100;
      maxLimit = 900;
      break;
    case `2` :
    case `중` :
      minLimit = 10;
      maxLimit = 90;
      break;
    case `3` :
    case `하` :
      minLimit = 100;
      maxLimit = 900;
      break;
    default :
      alert(`값을 다시 입력해주세요`);
      continue;
    }
    break;  
  }

let questionNumber = 1;
let correctCount = 0;
let wrongCount = 0;

// 무한 반복
while (true) {
  // 1. 1~10까지의 난수 2개 생성
  let randomInt1 = Math.floor(Math.random() * maxLimit + 1) + minLimit;
  let randomInt2 = Math.floor(Math.random() * maxLimit + 1) + minLimit;

  // 실제 답 생성
  let correctAnswer = randomInt1 + randomInt2;

  // 정답 입력 창 생성  & 정답 입력
  let userAnswer = prompt(`${questionNumber}. ${randomInt1} + ${randomInt2}는? (정답: ${correctAnswer})`);

  // 문자번호 증가
  questionNumber++;
  
  // 아무것도 입력하지 않으면 정답 여부 출력
  if (userAnswer === null) {
    wrongCount++;
    alert(`틀렸습니다`);
    break;
  }

  // 숫자로 변환
  userAnswer = +userAnswer;

  // 0을 입력하면 게임 중단
  if (userAnswer === 0) {
    alert(`게임을 중단합니다`)
    alert(`${correctCount}번 맞았고, ${wrongCount}번 틀렸습니다.`);
    break;
  }

  // 정답 여부 출력
  if (userAnswer === correctAnswer) {
    correctCount++;
    alert(`정답입니다`);
  } else {
    wrongCount++
    alert(`틀렸습니다`);
  }
}