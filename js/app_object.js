const person = {
  firstName : 'steve',
  lastName : 'Smith',
  age : '36',
  email :'s@ada.com',
  hobbies: ['music','sports'],
  address:{
    city: 'Maimi',
    State: 'FL'
  },
  getBirthYear:function(){
    return 2017 - this.age;
  }
}

let val;

val = person;

//get specific val

val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.State;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people =[
  {name :'jhon', age : 30},
  {name : 'Mike', age: 25}
]

for(let i =0;i<people.length;i++){
  console.log(people[i].name);
}