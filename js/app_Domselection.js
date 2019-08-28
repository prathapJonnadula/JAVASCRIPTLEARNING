//get elementby by  id
//document.hgetElementById()

console.log(document.getElementById('task-title'));

//get things form element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').class);

//change stylying
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

//change content

document.getElementById('task-title').textContent = 'Task List'
document.getElementById('task-title').textContent = 'My Tasks'
document.getElementById('task-title').innerHTML = '<span style= "color:red">Task List</span>';

console.log(document.querySelector('#task-tile'));
console.log(document.querySelector('.card-title'));console.log(document.querySelector('h5'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(odd)').style.color = '#ccc';