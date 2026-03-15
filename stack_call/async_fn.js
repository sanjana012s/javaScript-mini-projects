async function myFunction(res){
 
  return "hello";
  //  throw "404 page not found";
}
myFunction().then((res)=>console.log(res))
.catch((err)=>console.log(err));