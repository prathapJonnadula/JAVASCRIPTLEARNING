// //set local storage Item

//  localStorage.setItem('name', 'jhon');
//  localStorage.setItem('age', '30');
// //set in session storage

// sessionStorage.setItem('name', 'Beth')

//remove fromsroage

// localStorage.removeItem('name');


//retrive item
// const name =localStorage.getItem('name');
// const age =localStorage.getItem('age');

// localStorage.clear();
// console.log(name,age);


document.querySelector('form').addEventListener('submit', function(e){
  const task= document.getElementById('task').value;
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks =[];
  }
  else{
    tasks= JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
  alert(`Task Saved : ${localStorage.getItem('tasks')}`);

  e.preventDefault();
});

const tasks= JSON.parse(localStorage.getItem('tasks'
));
 tasks.forEach(function(task){
   console.log(task);
 });