function saveDb(data, success, failure){
  let internetSpeed = Math.floor(Math.random()*10) + 1;

  if(internetSpeed > 4){
    success();
  } else {
    failure();
  }
}

saveDb("data1",
  ()=>{
    console.log("Success: data1 saved");

    saveDb("data2",
      ()=>{
        console.log("Success: data2 saved");

        saveDb("data3",
          ()=>{
            console.log("Success: data3 saved");

            saveDb("data4",
              ()=>{
                console.log("Success: data4 saved");

                saveDb("data5",
                  ()=>{
                    console.log("Success: data5 saved");
                  },
                  ()=>{
                    console.log("Failure: data5 not saved");
                  }
                );

              },
              ()=>{
                console.log("Failure: data4 not saved");
              }
            );

          },
          ()=>{
            console.log("Failure: data3 not saved");
          }
        );

      },
      ()=>{
        console.log("Failure: data2 not saved");
      }
    );

  },
  ()=>{
    console.log("Failure: data1 not saved");
  }
);