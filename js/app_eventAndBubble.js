//Event bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log("cardTitle")
// });
// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log("card Contetnt")
// });
// document.querySelector('.card').addEventListener('click', function(){
//   console.log("card ")
// });
// document.querySelector('.col').addEventListener('click', function(){
//   console.log(".col ")
// });
 
//Event Deletion

// const deleteItem = document.querySelector('.delete-item');
// deleteItem.addEventListener('click',delItem);

document.body.addEventListener('click',delItem);

// function delItem(e){
//   if(e.target.className === 'fa fa-remove'){
//     console.log('delete Item');
//   }
// }

function delItem(e){
  if(e.target.parentElement.classList.contains('delete-item')
  ){
    console.log('delete Item');
    e.target.parentElement.parentElement.remove();
  }
}