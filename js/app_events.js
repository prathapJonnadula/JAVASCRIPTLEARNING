// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('Hello World');
//   e.preventDefault();
// })

// document.querySelector('.clear-tasks').addEventListener('click',onclick);
// function onclick(e){
//   // console.log('Clicked');
//   // e.preventDefault();
//   let val ;
//   val =e;
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;
//   val= e.target.innerText='Hello';
//   console.log(val);
// }
document.querySelector('.clear-tasks').addEventListener('mouseover',onclick);
function onclick(e){
  // console.log('Clicked');
  // e.preventDefault();
  let val ;
  val =e;
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  val= e.target.innerText='Hello';
  val = e.timeStamp;

//codrs event relative to the window
val= e.clientY;
val = e.clientX;

val = e.offsetY;
val = e.offsetX;

  console.log(val);
}