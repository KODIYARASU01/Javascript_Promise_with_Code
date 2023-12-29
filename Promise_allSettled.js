//Creating a promises :
//Promise-1 :

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise-1 Success");
    }, 5000);
  });
  //Promise-2 :
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise-2 Failure");
    }, 1000);
  });
  //Promise-3 :
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise-3 Success");
    }, 2000);
  });
  
  //Promise.allSettled();..It will show all the promise value which promise get (resolved and rejected)

  //Ex:1 
  Promise.allSettled([promise1, promise2, promise3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  
  //After 5s it will show the output which promise will get resolved and rejected shows like array inside objects---->

//   Like this :

//   [
//     {
//         "status": "fulfilled",
//         "value": "Promise-1 Failure"
//     },
//     {
//         "status": "rejected",
//         "reason": "Promise-2 Failure"
//     },
//     {
//         "status": "fulfilled",
//         "value": "Promise-3 Failure"
//     }
// ]
  
