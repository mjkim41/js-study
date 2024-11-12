// ================ DOM 불러오기 ====================== //
const $numbers = document.querySelector('.number-wrapper #numbers');
const [$up, $down] = [...document.querySelector('.result').children];



// ======================함수 ========================== //
// 1~100 아이콘 생성
// => numbers class 안에 div 태그 만들고, 그 안에 1~100 숫자 아이콘 생성
let minNum = 1;
let maxNum = 100;

// 정답 선택하고 값 바꿔야 되므로, 그냥 만들지 않고 function으로 만들어주고 바로 호출함 
function createNumbers(minNum, maxNum) {
  // 먼저 기존 숫자 아이콘을 제거하고(나중에 숫자 또 다시 숫자를 만들건데, 그 때 기존에 있는 숫자 리스트는 없어지도록 함)
  $numbers.innerHTML = '';
  for (i=minNum; i <= maxNum; i++) {
    const $newDiv = document.createElement('div');
    $newDiv.textContent = i;
    $newDiv.classList.add('icon');
    $numbers.append($newDiv);
  }
};

// 초기에 일단 숫자 누름
createNumbers(minNum, maxNum);

// 정답 생성
const correctAnswer = Math.floor(Math.random() * 100) + 1;
console.log(`정답: `+correctAnswer);

// 아이콘을 클릭하면 발생하는 이벤트
$numbers.addEventListener('click', e => {
  // 클릭한 숫자를 가져와서
  const selectedNumber = +e.target.textContent;

  // 클릭한 숫자가 정답보다 크면
  // 클릭한 숫자 42 > 정답 30
  if (selectedNumber > correctAnswer) {
    // DOWN 버튼이 활성화
    $down.classList.add('selected');
    // 2초 뒤에 비활성화
    setTimeout(e => {
      $down.classList.remove('selected');
    }, 2000);
    // 숫자 아이콘을 1 ~ (클릭한숫자 -1)까지 보이게 한다.
    maxNum = selectedNumber - 1; //
    createNumbers(minNum, maxNum);

  // 클릭한 숫자가 정답보다 작으면
  } else if (selectedNumber < correctAnswer) {
    // UP 버튼 활성화
    $up.classList.add('selected');
    setTimeout(e => {
      $up.classList.remove('selected');
    }, 2000);
    // 숫자 아이콘을 1 ~ (클릭한숫자 -1)까지 보이게 한다.
    minNum = selectedNumber + 1; //
    createNumbers(minNum, maxNum);

  // 정답이면
  } else {
    // id=finish에 .show class를 붙여라
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');
    setTimeout(() => $finish.classList.remove('show'), 3000);

    // 정답 숫자(id=icon)에 #move id를 부여해라
    e.target.setAttribute('id','move');
    setTimeout(() => $finish.setAttribute('id', 'move'), 2000);
  }
});
