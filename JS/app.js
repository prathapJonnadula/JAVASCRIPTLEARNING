//cnstructor

function Person(name,dob){
  this.name =name;
  // this.age = age;
  
  this.birthday = new Date(dob);
  this.getAge = function(){
    const diff = Date.now()-this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }
  //console.log(this)
}

// const brad = new Person('brad',36);
// const jhon = new Person('jhons',30);
// console.log(brad.age);

const brad = new Person('jhon', '9-10-1981');
console.log(brad.getAge());