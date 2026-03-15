// function saveDb(data){
//   return new Promise((resolve, reject)=>{
//     let internetSpeed = Math.floor(Math.random()*10) + 1;

//     if(internetSpeed > 8){
//       resolve("success:data was saving");
//     }
//     else{
//       reject("failure:data was not saving");
//     }
//   })
// }

// //promise function are used to remove the callback hell
// saveDb("sanjana")
// .then(()=>{
//   console.log("Data 1: saved successfully");

//   return saveDb("riya");   // return add kiya
// })

// .then(()=>{
//   console.log("Data 2: saved successfully");

//   return saveDb("miya");   // return add kiya
// })

// .then(()=>{
//   console.log("Data 3: saved successfully");
// })

// .catch(()=>{
//   console.log("Error in saving data");
// });

//second method 
function saveDb(data){
  return new Promise((resolve, reject)=>{
    let internetSpeed = Math.floor(Math.random()*10) + 1;

    if(internetSpeed > 8){
      resolve("success:data was saving");
    }
    else{
      reject("failure:data was not saving");
    }
  })
}

//promise function are used to remove the callback hell
saveDb("sanjana")
.then((result)=>{
  console.log("Data 1: saved successfully");
  console.log(result);

  return saveDb("riya");   // return add kiya
})

.then((result)=>{
  console.log("Data 2: saved successfully");
  console.log(result);
  return saveDb("miya");   // return add kiya
})

.then((result)=>{
  console.log("Data 3: saved successfully");
  console.log("Data 3: saved successfully");
})

.catch((error)=>{
  console.log("Error in saving data");
  console.log("Error in saving data");
});