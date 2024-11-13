let previousResult = 0;
let currentResult = 0;

function calculateAdd() {
  const userINput = Number($inputNumber.value);
  previousResult = currentResult;
  currentResult += previousResult + userINput;
}

function calculateSub() {
  const userINput = Number($inputNumber.value);
  currentResult -= previousResult + userINput;
}

// 통합
function calculate(type) {
  const userINput = Number($inputNumber.value);
  currentResult = operateNumber(type);
}

function operateNumber(type) {
  switch (type) {
    wtich 
  }
}


$addBtn = addEventListener('click', calculateAdd);
$subBtn = addEventListener('click', calculateSub);
// 통합
$subBtn = addEventListener('click', calculate('+'));

