document.getElementById('goal-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const goalInput = document.getElementById('goal-input');
  const goalText = goalInput.value;
  
  if (goalText) {
      const currentGoalDiv = document.getElementById('current-goal');
      currentGoalDiv.textContent = `Current Goal: ${goalText}`;
      goalInput.value = '';
  }
});

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const todoInput = document.getElementById('todo-input');
  const todoDatetime = document.getElementById('todo-datetime');
  
  const todoText = todoInput.value;
  const todoDateTimeValue = todoDatetime.value;
  
  if (todoText && todoDateTimeValue) {
      const todoDate = new Date(todoDateTimeValue).toLocaleDateString();
      
      let dateSection = document.getElementById(`date-${todoDate}`);
      if (!dateSection) {
          dateSection = document.createElement('div');
          dateSection.id = `date-${todoDate}`;
          
          const dateHeader = document.createElement('h3');
          dateHeader.textContent = todoDate;
          dateSection.appendChild(dateHeader);
          
          const todoList = document.createElement('ul');
          todoList.id = `list-${todoDate}`;
          dateSection.appendChild(todoList);
          
          document.getElementById('todo-list').appendChild(dateSection);
      }
      
      const listItem = document.createElement('li');
      
      const todoTextSpan = document.createElement('span');
      todoTextSpan.textContent = `${todoText} - ${new Date(todoDateTimeValue).toLocaleTimeString()}`;
      
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.addEventListener('change', function() {
          if (completeCheckbox.checked) {
              todoTextSpan.classList.add('completed');
          } else {
              todoTextSpan.classList.remove('completed');
          }
      });
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
          listItem.remove();
          
          if (!dateSection.querySelector('ul').hasChildNodes()) {
              dateSection.remove();
          }
      });
      
      listItem.appendChild(completeCheckbox);
      listItem.appendChild(todoTextSpan);
      listItem.appendChild(deleteButton);
      
      document.getElementById(`list-${todoDate}`).appendChild(listItem);
      
      todoInput.value = '';
      todoDatetime.value = '';
  }
});

// Study Timer
let timer;
let seconds = 0;
let timerRunning = false;

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
  document.getElementById('timer-display').textContent = formatTime(seconds);
}

document.getElementById('start-timer').addEventListener('click', function() {
  if (!timerRunning) {
      timer = setInterval(function() {
          seconds++;
          updateTimerDisplay();
      }, 1000);
      timerRunning = true;
  }
});

document.getElementById('stop-timer').addEventListener('click', function() {
  if (timerRunning) {
      clearInterval(timer);
      timerRunning = false;
  }
});

document.getElementById('reset-timer').addEventListener('click', function() {
  clearInterval(timer);
  seconds = 0;
  updateTimerDisplay();
  timerRunning = false;
});

