//Strings
const name1 = 'jeff';
const name2 = new String('jeff');

console.log (typeof name1);
console.log(typeof name2);
// if(name2 ==='jeff')

const num1 =5;
const num2 = new Number(5);

const bool1 = true;
const bool2 = new Boolean(true);
const sim1 = function(x,y){
  return x+y;
}
const sum2 = new Function('x','y', 'return 1+1');

console.log(sum2(1,1));

const jhon1= {
  name:"jhon",
}
const jhon2 = new Object({name:"jhon"});

console.log(jhon2)

//arrays 
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr2);
//regualr expression
const rel = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re2)