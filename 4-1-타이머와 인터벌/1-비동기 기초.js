// 동기 : 코드가 순차적으로 실행된다.
// 비동기 : 코드가 순서없이 실행된다.


// setTimeout : 비동기 타이머 - 코드를 동시에 실행시킴
// setTimeout(콜백함수, 지연시간(ms))
console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');

/* 
setTimeout(() => {
  for (let i = 0; i < 3; i++) {
    setTimeout(()=> {
      console.log(`hello${i}`);
    }, 100)
  }  
}, 0);

setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(`bye${i}`);
    }, 200)
  }
}, 0);
*/


