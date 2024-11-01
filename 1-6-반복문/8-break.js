for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log(`반복문 종료`);
console.log('=======================');

// 중첩 반복문의 break
for (let i = 0; i <3; i++) {
  for (let j = 0; j < 2; j++) {
    if (i ===j) {
      break;
    }
    console.log(`${i}, ${j}`);
  }
}
console.log('=======================');



for (let a = 0; a < 3; a++) {
  if (a === 1) {
    break;
  }
  for (let b = 0; b < 2; b++) {
    console.log(`${a}, ${b}`);
  }
}

// 안쪽 break로 바깥쪽 break 시키ㅣ기
apple: for (let i = 0; i <3; i++) {
samsung:  for (let j = 0; j < 2; j++) {
    if (i ===j) {
      break apple;
    }
    console.log(`${i}, ${j}`);
  }
}
