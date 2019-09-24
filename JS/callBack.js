const posts=[
  {title:'post one',body:'this us post one'},
  {title:'post two',body:'this us post two'}
];


function createpost(post){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      posts.push(post);
      const error = false;
      if(error){
        reject('Error: something went wrong');
      }else{
      resolve();
      }
    },2000);
  });
 
}

function getposts(){
  setTimeout(function(){
    let output ='';
    posts.forEach(function(post){
      output +=  `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}
// function createpost(post, callback){
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   },2000);
// }

function getposts(){
  setTimeout(function(){
    let output ='';
    posts.forEach(function(post){
      output +=  `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

// createpost({title:'post three',body :'This is post three'},getposts);
// getposts();

createpost({title:'post three',body :'This is post three'}).then(getposts).catch(function(err){
  console.log(err)
});
