const form = document.querySelector('.tasks__control');
const btn = form.querySelector('.tasks__add');
const tasksInput = form.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

let words = 'А где задача?';

tasksInput.addEventListener('change', (ev) => {
  words = ev.target.value;
})

if (localStorage.length > 0) {
  for (let ind = 0; ind < localStorage.length; ind++) {
    let key = localStorage.getItem('Задача №' + ind);
    tasksList.innerHTML += `
    <div class="task">
      <div class="task__title">
        ${key} 
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `;
    remove();
  }
}

function remove() {
  const taskRemove = document.querySelectorAll('.task__remove');
  const task = tasksList.querySelectorAll('.task');
  const taskTitle = tasksList.querySelectorAll('.task__title');
  taskRemove.forEach((el, ind) => {
    localStorage.setItem('Задача №' + ind, taskTitle[ind].innerText);
    el.addEventListener('click', () => {
      task[ind].remove();
      localStorage.removeItem('Задача №' + ind);
    })
  })
}

btn.addEventListener('click', (ev) => {
  ev.preventDefault();
  tasksList.innerHTML += `
  <div class="task">
    <div class="task__title">
       ${words} 
    </div>
  <a href="#" class="task__remove">&times;</a>
  </div>
  `;
  tasksInput.value = '';
  words = 'А где задача?';
  remove();  
})