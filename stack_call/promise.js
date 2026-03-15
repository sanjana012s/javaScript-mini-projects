function saveDb(data){
  return new Promise((resolve, reject)=>{
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>8){
      resolve("success:data was saving");
    }
    else{
      reject("failure:data was not saving");
    }
  })
}

//promise function are used to remove the callback hell
saveDb("sanjana")
.then(()=>{
  console.log("Data saved successfully");
})
.catch(()=>{
  console.log("Error in saving data");
});