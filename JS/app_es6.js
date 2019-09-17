class Person{
constructor(firstName, LastName,dob){
 this.firstName = firstName;
 this.LastName = LastName;
 this.birthday = new Date(dob);
}
greeting(){
  return `hello there ${this.firstName} ${this.LastName}`;
}
calculateAge(){
  const diff = Date.now()- this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
}
getsmarry(newLastName){
 this.LastName = newLastName;
}
static addNumber(x,y){
  return x+y;
}
}

const mary = new Person('mary', 'william', '11-12-1980');
console.log(mary.calculateAge());
mary.getsmarry('hello');
console.log(mary.greeting());

console.log(Person.addNumber(1,2));