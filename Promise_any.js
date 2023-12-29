//Creating a promises :
//Promise-1 :
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise-1 Failure");
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
    reject("Promise-3 Failure");
  }, 2000);
});

//Promise.any(); It will be show only a success state.

//Ex:1 ---> It will give output Based up on which promise get first resolved.
Promise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors);
  });

//After 5s Promise-1 having a resolved state so it will return output

//O/p == > Promise-1 Success

//Once if all the promise get rejected after 5s aggregate Error will be throw.
