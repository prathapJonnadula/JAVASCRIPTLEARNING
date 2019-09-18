class Book{
  constructor (title, author,isbn ){
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}

class UI{
  addBooktoList(book){
    const list =document.querySelector('#book-list');
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
  clearFields(){
    document.getElementById('title').value ='';
    document.getElementById('author').value ='';
    document.getElementById('isbn').value ='';
  }
  showallert(message,className){
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
  deleteBook(target){
    if(target.className ===  'delete'){
      target.parentElement.parentElement.remove();
     }
  }

}
//local storage class
class Store{
  static getBooks(){
    let books;
   if(localStorage.getItem('books')=== null){
    books =[];
    }else{
      books= JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks(){
    const books = Store.getBooks();
    books.forEach(function(book){
      const ui = new UI();
      ui.addBooktoList(book);
    });
  }
  static addBook(book){
    const books= Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }
  static removeBook(isbn){
    const books = Store.getBooks();
    books.forEach(function(book,index){
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    })
    localStorage.setItem('books',JSON.stringify(books));
  }
}
//DOM Load even
document.addEventListener('DOMContentLoaded',Store.displayBooks);
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
    ui.showallert('Please fill in all the fields','error');
  }else{
  ui.addBooktoList(book);
  //add storage
  Store.addBook(book);
  ui.showallert('Book Added!','sucess')
  ui.clearFields();
  }
  e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click',function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  //remove form local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  ui.showallert('Removed from the list','sucess');
  e.preventDefault();
});