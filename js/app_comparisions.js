const id =100;

//equal to 
if(id==101){
  console.log("Correct");
}else{
  console.log("In Correct");
}
//not Equal
if(id!=101){
  console.log("Correct");
}else{
  console.log("In Correct");
}
//equal to value and type
if(id===100){
  console.log("Correct");
}else{
  console.log("In Correct");
}
//not equal to value and type
if(id!==100){
  console.log("Correct");
}else{
  console.log("In Correct");
}

if(typeof id!=='undifined'){
  console.log(`the id is ${id}`)
}else{
  console.log('no id')
}

if(id>=100){
  console.log("Correct");
}else{
  console.log("In Correct");
}

if(id<=100){
  console.log("Correct");
}else{
  console.log("In Correct");
}
//IF Else 
const color = 'yellow'

if(color === 'red'){
  console.log('color is red');

}else if(color === 'blue'){
  console.log('color is blue');
}else{
  console.log('color is not red or blue')
}
//logical operator
const name = 'Steve';
const age = 5;
if(age>0 && age<12){
  console.log( `${name} is chaild`)
}else if(age >=13 && age<=19){
  console.log( `${name} is teenager`)
}else{
  console.log( `${name} is Adult`)
}
//OR ||

//logical operator
if(age>16 || age<65){
  console.log( `${name} can not run in race`)
}else{
  console.log( `${name} registered for race `)
}

//terinary operator
console.log(id===100 ?'correct':'Incorrect')

//with out braces


//Switches

  switch(color){
    case 'red': 
      console.log('color is red');
      break;
    case 'blue':
      console.log('color is blue');
      break;
    default:
     console.log('color is not red or blue');
     break;
  }
let day;
switch (new Date().getDay()){
  case 0:
    day='Sunday';
    break;
  case 1:
    day='Monday';
    break;
  case 2 :
    day='Monday';
    break;
}

console.log(`today is ${day}`)