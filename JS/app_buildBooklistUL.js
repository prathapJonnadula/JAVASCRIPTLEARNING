//book Constructor
function Book(title, author, isbn){
 this.title = title;
 this.author = author;
 this.isbn = isbn;
}
//ui constructuor
function UI(){
  
  UI.prototype.addBooktoList = function(book){
 //   document.querySelector('u-full-width').getElementsByTagName('table');
 const list =document.getElementById('book-list');
    //crate elelmt 
    const row = document.createElement('tr');  
    //insert col
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href ="#" class ='delete'>X</a></td>`;
    list.appendChild(row);
  }

  UI.prototype.clearFields= function(){
    document.getElementById('title').value ='';
    document.getElementById('author').value ='';
    document.getElementById('isbn').value ='';
  }
  
  UI.prototype.showallert = function(message,className){
    //create div
    const div = document.createElement('div');
    div.className=`alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div,form);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000)
  }

 UI.prototype.deleteBook= function(target){
   if(target.className ===  'delete'){
    target.parentElement.parentElement.remove();
   }
 }

}


document.getElementById('book-form').addEventListener('submit',function(e) {
  //get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  //instaciate book constructor
  const book= new Book(title,author,isbn);

  //Instantiate UI
  const ui = new UI();
  //validate
  if(title === ''|| author === ''||isbn=== ''){
    //error alert
    ui.showallert('Pleasefill in all the fields','error');
  }else{
  ui.addBooktoList(book);
  ui.showallert('Book Added!','sucess')
  ui.clearFields();
  }
  e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click',function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showallert('Removed from the list','sucess');
  e.preventDefault();
})