const name = "Jhon";
const age = 30;
const job = "Web Developer";
const city = 'Los Angels'; 
let html;
//with out Templete Strings(en5)
html = '<ul>'+
'<li>Name : '+name +'</li>'+
'<li>Age : ' +age+'</li>'+
'<li>Job : ' +job+'</li>'+
'<li>City : ' +city+'</li>'+
'</ul>';

//with temple string
// function hello(){
//   return 'hello';
// }
// html= `
// <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>${2+2}</li>
//   <li>${hello()}</li>
//   <li>${age>30?'over 30':'under 30'}</li>
// </ul>
// `;

document.body.innerHTML= html;