//Creating a promises :
//Promise-1 :

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise-1 Failure");
    }, 5000);
  });
  //Promise-2 :
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise-2 Success");
    }, 1000);
  });
  //Promise-3 :
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise-3 Failure");
    }, 2000);
  });
  
  //Promise.race();--->Output will become either resolove or reject

  //Ex:1-->  It will give output Based up on which promise get first resolved or reject based which promise having less time
  Promise.race([promise1, promise2, promise3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);   
    });
  
  //After 1s it will show the output based upon which promise get settled first either it will be resolved or reject it will show the output 

  //O/p == > Promise-2 Success


  
