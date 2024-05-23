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
      const listItem = document.createElement('li');
      
      const todoTextSpan = document.createElement('span');
      todoTextSpan.textContent = `${todoText} - ${new Date(todoDateTimeValue).toLocaleString()}`;
      
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
      });
      
      listItem.appendChild(completeCheckbox);
      listItem.appendChild(todoTextSpan);
      listItem.appendChild(deleteButton);
      
      document.getElementById('todo-list').appendChild(listItem);
      
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
