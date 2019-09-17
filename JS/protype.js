//object.protoyers
function Person(firstName,lastName,dob){
  this.FirstName =firstName;
  this.LastName = lastName
  // this.age = age;
  
  this.birthday = new Date(dob);
  // this.getAge = function(){
  //   const diff = Date.now()-this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear()-1970);
  // }
  //console.log(this)
}
Person.prototype.getAge = function(){
  const diff = Date.now()-this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
}
//get 'full naem

Person.prototype.getfullName = function(){
  return `${this.FirstName} ${this.LastName}`;
}
//gets marries
Person.prototype.getsmarried = function(newlastName){
  this.LastName = newlastName;
}

Person.prototype.greeting = function(){
  return `hello there ${this.FirstName} ${this.LastName}`;
}

const jhon = new Person('jhon', 'doe', '8-12-90');
const marry = new Person('marry', 'jhonson', 'March 20 1978');


// console.log(marry)
// console.log(jhon.getAge());
// console.log(marry.getfullName());
// marry.getsmarried('smith');
// console.log(marry.getfullName());
// console.log(marry.hasOwnProperty('FirstName'));
// console.log(marry.hasOwnProperty('getfullName'));
//console.log(jhon.greeting());
// customer constructor 

function customer(firstName,lastName, phone, membership){
Person.call(this, firstName,lastName);
this.phone= phone;
this.membership = membership;
}
//inhert person prototype methods
customer.prototype = Object.create(Person.prototype);

//make sustomer prototye return customer
customer.prototype.constructor = customer;

customer.prototype.greeting= function(){
  return `hello there ${this.FirstName} ${this.LastName} welcome to our company`;
}
const customer1 = new customer('jon','doe','5555555','standard');
console.log(customer1);
console.log(customer1.greeting());