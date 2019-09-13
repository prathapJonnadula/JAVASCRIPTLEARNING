//Defien UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn= document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load alll evvvnet lister
loadEventListners()

//load all event 
function loadEventListners() {
  //add TAsk Event
  form.addEventListener('submit', addTask);
  //DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded',getTasks);
  taskList.addEventListener('click', remove);
  //clear task event
  clearBtn.addEventListener('click',cleartasks);
  //FILTER TASK EVENT
  filter.addEventListener('keyup', filterTask);
}

//get Tasks Form local storage
function getTasks(){
  if(localStorage.getItem('tasks')=== null){
    tasks=[];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    const li = document.createElement('li');
    li.className ='collection-item';
    //create text node
    li.appendChild(document.createTextNode(task));
    //create new link elemetn 
    const link = document.createElement('a');
    link.className = 'delete-item secondry-content';
    //add icon html
    link.innerHTML ='<i class = "fa fa-remove"></i>'
    li.appendChild(link);
    taskList.appendChild(li);
    //Store in local storage
  //storeTaskInLocalStorage(taskInput.value);
//taskInput.value='';
  });
}
//addTask
function addTask(e) {
if(taskInput.value === '') {
  alert('add Task');
}else {
  const li = document.createElement('li');
  li.className ='collection-item';
  //create text node
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link elemetn 
  const link = document.createElement('a');
  link.className = 'delete-item secondry-content';
  //add icon html
  link.innerHTML ='<i class = "fa fa-remove"></i>'
  li.appendChild(link);
  taskList.appendChild(li);
  //Store in local storage
  storeTaskInLocalStorage(taskInput.value);
taskInput.value='';
}

  e.preventDefault();
}

function remove(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
    e.target.parentElement.parentElement.remove();
    alert(`${e.target.parentElement.parentElement.innerText} deleting value`);
      //remove fom the local storge
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem){
  console.log(taskItem);
  let tasks;
  if(localStorage.getItem('tasks')=== null){
    tasks=[];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task,index){
    if(taskItem.textContent === task){
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function cleartasks(e){
  //taskList.innerHTML = ''
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  //clear task from Local Storage
  cleartasksFromLocalStorage();
}
function cleartasksFromLocalStorage(){
  localStorage.clear();
}

//JSPREF.COM

function filterTask(e){
const text = e.target.value.toLowerCase();
document.querySelectorAll('.collection-item').forEach(function(task){
  const item= task.firstChild.textContent;
  if(item.toLowerCase().indexOf(text)!= -1){
    task.style.display ='block'
  }else{
    task.style.display ='none'
  }
})
}

function storeTaskInLocalStorage(task){
let tasks;
if(localStorage.getItem('tasks')=== null){
  tasks=[];
}else{
  tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks));
}

