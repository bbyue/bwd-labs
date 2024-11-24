const openDialogButton = document.getElementById('openDialogButton');
const myDialog = document.getElementById('myDialog');
const closeDialogButton = document.getElementById('closeDialogButton');


const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const searchInput = document.getElementById('searchInput');

const toDoList = document.getElementById('toDoList');
const inProgressList = document.getElementById('inProgressList');
const completedList = document.getElementById('completedList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


openDialogButton.addEventListener('click', () => {
    myDialog.showModal();
});
closeDialogButton.addEventListener('click', () => {
    myDialog.close(); 
});
window.addEventListener('click', function(event) {
    if (event.target === myDialog) {
        myDialog.close();
    }
});


function renderTasks() {
 toDoList.innerHTML = '';
 inProgressList.innerHTML = '';
 completedList.innerHTML = '';

 tasks.forEach((task, index) => {
  const li = document.createElement('li');
  li.classList.add('task-item');

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `checkbox-${index}`;
  checkbox.classList.add('task-checkbox');
  checkbox.checked = task.status !== 'toDo';
  checkbox.addEventListener('change', () => {
   task.status = task.status === 'toDo' ? 'inProgress' : (task.status === 'inProgress' ? 'completed' : 'toDo');
   saveTasks();
   renderTasks();
  });


  const taskText = document.createElement('span');
  taskText.textContent = task.text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  deleteButton.id = `delete-${index}`;
  deleteButton.classList.add('task-delete');
  deleteButton.addEventListener('click', () => {
   tasks.splice(index, 1);
   saveTasks();
   renderTasks();
  });
  taskContainer.appendChild(taskText);
  taskContainer.appendChild(checkbox);
  li.appendChild(taskContainer);
  li.appendChild(deleteButton);

  const targetList = task.status === 'toDo' ? toDoList : (task.status === 'inProgress' ? inProgressList : completedList);
  targetList.appendChild(li);
 });
}

function saveTasks() {
 localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskButton.addEventListener('click', () => {
 if (taskInput.value.trim()) {
  tasks.push({ text: taskInput.value.trim(), status: 'toDo' });
  allTasks.push({ text: taskInput.value.trim(), status: 'toDo' });
  taskInput.value = '';
  saveTasks();
  renderTasks();
 } else {
 }
});

searchInput.addEventListener('input', () => {
 const searchTerm = searchInput.value.toLowerCase();
 if (searchTerm.trim() === '') {
  tasks = allTasks; 
 } else {
  tasks = allTasks.filter(task => task.text.toLowerCase().includes(searchTerm));
 }
 renderTasks();
});

allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();
