//for 

//  for (let i=0;i<=10;i++){
//  console.log(`Number ${i}`);
//  if(i===2){
//    console.log(`${i} is My favorite number`)
//    continue;
//  }
//  if(i===7){
//    console.log(`${i} is no more values`);
//    break;
//  }
//  console.log(`number ${i}`);
//  }

//While loop

// let i =100;
// while (i<10){
//   console.log(`number ${i}`);
//   i=i+1;
// }
// //do while
//  i=100;
// do {
//   console.log(`Number${i}`);
//   i++;
// }while(i<10)

const cars=['Ford','Chevy','Honda','Tyota'];

// for(let i =0;i<cars.length;i++){
//   console.log(`${cars[i]}`)
// }

cars.forEach(function(car,index,array){
  console.log(`${index}: ${car}`);
  console.log(array)
});

// const users =[
//   {id:1, name:'jgons'},
//   {id:2, name:'sara'},
//   {id:3, name:'Karen'}
// ];

// const ids = users.map(function(user){
//   return user.id
// });
// console.log(ids);

// const user ={
//   firstName:'Jhon',
//   lastName:'Doe',
//   age:40
// }

// for (let x in user){
//   console.log(`${x} : ${user[x]}`)
// }
