const personprototyes ={
  greeting: function(){
    return  `hello there ${this.firstName} ${this.lastName}`
  },
  getsmarried: function(newlastName){
    this.lastName = newlastName;
  }
}
const mary = Object.create(personprototyes);
mary.firstName = 'Marry';
mary.lastName = 'Williams';
mary.age =30;
console.log(mary.greeting());
mary.getsmarried('thompson')
console.log(mary.greeting());

const brad = Object.create(personprototyes,{
  firstName :{value: 'brad'},
  lastName: {value: 'Traversy'},
  age:{value:36}
});
console.log(brad.greeting());
// brad.getsmarried('up');
// console.log(brad.greeting());