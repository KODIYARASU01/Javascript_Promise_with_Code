//Basic Promise :

let userLogin = true;
function user() {
  return new Promise((resolve, reject) => {
    if (userLogin) {
      resolve("User Logined Succesfull");
    } else {
      reject("User Login Failure");
    }
  });
}

user()
  .then((res) => {
    console.log(res); //User logined succesfull
  })
  .catch((err) => {
    console.log(err); //User Login Failure
  });
