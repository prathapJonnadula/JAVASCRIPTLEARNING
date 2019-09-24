document.getElementById('button').addEventListener('click',loadData);

function loadData(e){
  //Create XHR REquest
  const xhr = new XMLHttpRequest();
  //Open 
  xhr.open('GET','JS/data.txt',true);
  // xhr.onload = function(){
  //   if(this.status=== 200){
  //     console.log(this.responseText);
  //   }
  // }

  //optional -spinner and loaders
    xhr.onprogress = function(){
      console.log('Ready STate', xhr.readyState);
    }
  // console.log('Ready STate', xhr.readyState);
  xhr.onreadystatechange = function(){
    // console.log('Ready STate', xhr.readyState);
    if(this.status=== 200 && this.readyState === 4){
      document.getElementById('output').innerHTML =   `<h1>${this.responseText}</h1>`
    }
  }
  xhr.onerror = function(){
    console.log("requst error");
  }
  xhr.send();
e.preventDefault();

//ready state values
  //0; request not intialized
  //1: server connection established
  //2: request reveived
  //3: processing request
  //4: request finisted and response is ready
}