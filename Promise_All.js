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
    resolve("Promise-2 Success");
  }, 1000);
});
//Promise-3 :
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise-3 Success");
  }, 2000);
});

//Promise.all();...Either one promise get rejected quikly it will through error..Next promises doesn't check it.
//Ex:1 --> If all the promise get resolved.
Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//After 5s it will show the output inside an array like---> ["Promise-1 success","Promise-2 success","Promise-3 success"]

// //Promise.all();
//Ex:2 --> Any one of the promise get rejected.
Promise.all([promise1, promise2, promise3])
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});
//After 5s it will show the reject value like --- > Promise-1 Failure

//Ex:2 --> If all the promise get rejected.
Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//After 1s it will show the reject value like --- > Promise-2 Failure..Because it has less timeOut
