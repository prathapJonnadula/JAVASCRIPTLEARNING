const user = {email: 'jdoe@gmail.com'}
try {
  //produce a Referecne error
// myfunction();
//produce type error
//null.myfunction();
//Syntax error
  // eval('hello')

// console.log1("hi");

if(!user.name){
  throw 'user has no name';
  throw new SyntaxError ('User has no name');
}
//Will produce URI Error
decodeURIComponent('%');

}catch(e){
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  // console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
}finally{
  console.log('regared of result');
}

console.log('program continue');