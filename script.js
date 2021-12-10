const taskInput = document.querySelector('#taskInput');
const taskDiv = document.querySelector('.tasks');


function focar() {
     taskInput.focus();
}

function addTask() {
     if (taskInput.value == 0) {
          alert('Insert a task')
     } else {
          taskDiv.innerHTML += `<div class="taskdiv"><span class="task">${taskInput.value}</span><button class="delete">X</button></div>`;
          taskInput.value = '';
          taskInput.focus();
     }

     let completed = document.querySelectorAll('.task');

     completed.forEach(el => {
          el.onclick = function () {
               el.classList.toggle('completed')
          }
     });

     let deletes = document.querySelectorAll('.delete');

     deletes.forEach(el => {
          el.onclick = function () {
               el.parentNode.remove()
          }
     });

}
