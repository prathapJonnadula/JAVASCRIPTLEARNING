let val;
//number to string
val = String(555);
val = String(4+4);
val = String(true);
val = String(new Date());
val = String([1,2,3,4])
val = (5).toString();
val = (true).toString();
//String to numbers
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1,2,3]);

val = parseInt('100');
val - parseFloat('100.30');

// const val1 = 5;
// const val2 = 6;
// const sum = val1+val2;

// const val1 = String(5);
// const val2 = 6;
// const sum = val1+val2; //if you want to make this as number 
const val1 = String(5);
const val2 = 6;
const sum = Number(val1)+val2;
const sum2 = Number(val1+val2);

console.log(sum);
console.log(typeof sum);
console.log(sum2);
console.log(typeof sum2);

// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));