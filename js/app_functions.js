// function greet(){
//  // console.log('Hello');
//  return 'hello'
// }
// console.log(greet());

// function greet( firstName, lastName){
//   // console.log('Hello');
//   if(typeof firstName === 'undefined'){
//     firstName = 'Jhon';
//   }
//   if(typeof lastName === 'undefined'){
//     lastName = 'Doe';
//   }
//   return 'hello' +" "+firstName+ " "+lastName
//  }
//  console.log(greet());

// function greet(firstName = 'Jhon', lastName ='Doe'){
//  // console.log('Hello');
//  return 'hello' + " " + firstName + " "+lastName;
// }
// console.log(greet());
// console.log(greet('Steve','Smith'));

//function Expresion

const square = function(x=3){
 return x*x;
};
// console.log(square());
// Immediately Invokable function Expression- IIFEs

// (function(name){
//   console.log('hello' +name );
// })(' jhons');

// Property methods

const todo ={
  add: function(){
    console.log('add todo..');
  },
  edit: function(id){
      console.log(`edit to do ${id}`);
  }
}
todo.delete = function(){
  console.log('delete todo');
}
todo.add();
todo.edit(11);
todo.delete();