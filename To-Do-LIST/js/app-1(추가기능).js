//========= 전역 변수 영역 ========//
// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: '장보기',
    done: true,
  },
  {
    id: 2,
    text: '점심 메뉴 정하기',
    done: false,
  },
  {
    id: 3,
    text: '게임하기',
    done: true,
  },
];

//========= DOM 가져오기 영역 ========//
const $todoListUl = document.querySelector('.todo-list');
const $addBtn = document.getElementById('add');
const $todoTextInput = document.getElementById('todo-text');

//========= 함수 정의 영역 ========//

// todos배열을 화면에 렌더링해주는 함수
function renderTodos() {
  // 0. 기존 내용 전부 삭제하기
  $todoListUl.innerHTML = '';

  // 1. todos를 반복한다.
  todos.forEach(todo => {
    // 2. li태그를 생성한다.
    const $li = document.createElement('li');
    // 3. li태그에 들어갈 속성들을 설정한다.
    $li.classList.add('todo-list-item');
    $li.dataset.id = todo.id;
    // 4. li태그의 자식 태그들을 한번에 삽입한다.
    $li.innerHTML = `
      <label class="checkbox">
        <input type="checkbox">
        <span class="text">${todo.text}</span>
      </label>
      <div class="modify"><span class="lnr lnr-undo"></span></div>
      <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    `;
    // 5. 이미 완료된 할 일은 체크처리하기 
    const $checkbox = $li.querySelector('input[type=checkbox]');
    $checkbox.checked = todo.done;

    // 6. 체크된 체크박스에 스타일 적용하기
    if ($checkbox.checked) {
      $checkbox.parentElement.classList.add('checked');
    }

    // 7. ul에 li 추가하기
    $todoListUl.append($li);
  });
}

//========= 이벤트 핸들러(이벤트가 실행될 때 호출되는 함수) 정의 영역 ========//
function todoInsertHandler(e) {
  // form안에 있는 버튼은 기본적으로 서버에 정보를 제출한다.
  // 그래서 자동 새로고침이 일어나기 때문에 이를 방지해야 함
  e.preventDefault();
  // console.log('add clicked!');

  // 1. 입력한 텍스트를 읽어옴
  const inputText = $todoTextInput.value;
  // 2. 해당 텍스트로 todo객체를 생성해야 함
  const newTodo = {
    id: String(Math.random()),
    text: inputText,
    done: false
  };
  // 3. 생성된 객체를 todos배열에 추가
  todos.push(newTodo);
  
  // 4. 배열을 리렌더링
  renderTodos();

  // 5. 후속 처리 (인풋 입력값 비우기)
  $todoTextInput.value = '';
}

//========= 이벤트 핸들러 등록 영역 ========//

// 할 일 추가 기능
$addBtn.addEventListener('click', todoInsertHandler);

//========= 코드 실행 영역 ========//

/*
  - todos배열에 있는 객체들을 화면에 그려야 함
*/
renderTodos();