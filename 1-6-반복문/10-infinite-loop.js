// infinite-loop(무한루프)
// 정확한 반복휫수를 사전에 파악 불가능하여 일단 무한으로 돌려 놓고 탈출조건을 설정

// while (true) = while (1) = for (; ;)
while (true) {
  let n = prompt('정수: ');
  if (n.includes(`그만`)) break;
  if (n.includes(`ㅋㅋ`)) {
    alert(`뭘 웃어?`);
    continue;
  }
  alert(`당신이 입력한 숫자: ${n}`)
};
alert('안녕히 계세용');
