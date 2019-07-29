const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = "Hello there my name is "
const tag = "Web Development,Web Programing,programing"
let val;
val = firstName + lastName;

//concatination

val = firstName+ ' '+lastName;
//Append

val ='Brad ';
val+= 'Traversy';

val = 'Hello My name is '+firstName+ 'and I am '+ age; 
val = "That's awesome I can\' wait"
//length
val = firstName.length;
//concat
val = firstName.concat(" ",lastName);
//change case

val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[0];
//indexof 

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
val = firstName.charAt('6');
val = firstName.charAt(firstName.length-1);

//substring

val = firstName.substring(0,4);

//slice

val = firstName.slice(-3);
//split()

val = str.split(" ");
val = tag.split(",");

//replace

val = str.replace("is", "is Prathap")
val = str.repeat(3);

//includes

val = str.includes("Hello")
val = str.includes("Hllo")


console.log(val);
