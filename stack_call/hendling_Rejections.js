async function getNum(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let num = Math.floor(Math.random()*10) + 1;

      if(num > 4){
        reject("Promise Rejected");
      }

      console.log(num);
      resolve(num);

    },1000)
  });
}

async function demo(){
  try{
    await getNum();
    await getNum();
    console.log("Sanjana");
    await getNum();
  }
  catch(error){
    console.log("Error:", error);
  }
}

demo();