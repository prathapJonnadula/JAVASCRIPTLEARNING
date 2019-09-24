const http = new easyHTTP;
//getPosts

// http.get("https://jsonplaceholder.typicode.com/posts",function(err,posts){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });

//get Single Posts

// http.get("https://jsonplaceholder.typicode.com/posts/1",function(err,posts){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });

//Create Data

const data = {
  title: 'custompost',
  body: 'this is custom post'
};
//create post
// http.post("https://jsonplaceholder.typicode.com/posts", data,function(err,post){
//  if(err){
//     console.log(err);
//  }else{
//   console.log(post);
//  }
// });

//Update Post
//  http.put("https://jsonplaceholder.typicode.com/posts/1",data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
//  });

//delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1",function(err,response){
  if(err){
    console.log(err);
  }else{
    console.log(responseds);
  }
});