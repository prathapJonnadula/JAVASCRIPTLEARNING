//create array

const numbers =[43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit= ['apple', 'Banana','Orange','Pear'];
const mixed = [22,'Hello', true, undefined, null,{a:1,b:2},new Date()];

let val;
//length var
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get a single val
val = numbers[4];

val = numbers[0];

//insert into array

numbers[2]= 100;

//find index of value
val = numbers.indexOf(36);

//mutating array
numbers.push(250);

//add on to fornt
numbers.unshift(120);

//take of val form end
numbers.pop();

//take of val form end
numbers.shift();

//splice Values

numbers.splice(1,3);

//numbers reverse

numbers.reverse();

//concat numbers
val = numbers.concat(numbers2);

//sort
val = fruit.sort();
val = numbers.sort();//sort by first digit of number

//use the compare function
val = numbers.sort(function(x,y){
  return x-y;
});

//reversre sort
val = numbers.sort(function(x,y){
  return y-x;
});
//find

 function under50(num){
   return num < 50;
 }
 val = numbers.find(under50);

 function over50(num){
  return num >50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);
