document.getElementById('button1').addEventListener('click',getText);
const output = document.getElementById('output');

function getText(){
  fetch("JS/data.txt").then(function(response){
    return response.text();
    }).then(function(data){
      console.log(data);
      output.innerHTML = data;
  }).catch(function(err){
    console.log(err);
  });
}
document.getElementById('button2').addEventListener('click',getJson);

function getJson(){
  fetch("JS/customers.json").then(function(res){
    return res.json();
  }).then(function(data){
    console.log(data);
    let output1 ='';
    data.forEach(function(post){
      output1 +=`<li>${post.name}</li>`
    })
    output.innerHTML = output1;
  }).catch(function(err){
    console.log(err);
  });
}
document.getElementById('button3').addEventListener('click',getExternal);

function getExternal(){
  fetch("https://api.github.com/users").then(function(res){
    return res.json();
  }).then(function(data){
    console.log(data);
    let output1 ='';
    data.forEach(function(user){
      output1 +=`<li>${user.login}</li>`
    })
    output.innerHTML = output1;
  }).catch(function(err){
    console.log(err);
  });
}