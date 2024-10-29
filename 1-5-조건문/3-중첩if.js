let height = prompt('키가 몇입니까?');

// 키가 140이상, 나이가 7살 이상인 경우 놀이기구 탑승 여부 출력
if (height >= 140) {
  let age = prompt('나이가 몇살입니까?');
  if (age >= 7) {
    alert('Congratulations! you can ride the rollercoster!');
  } else {
    alert(`We hope you'll be old enough to enjoy it next time!`);
  } 
} else {
  alert(`I\'m sorry, but for safety reasons, this ride has a height requirement that needs to be met. We hope you\'ll be tall enough to enjoy it next time!`);
}

