// const error = new Error();
// error.message = "This is a custom error.";
// error.name = "Dummy error";
// console.log(error);

// Login system
// User can access our system using email & password
// If someone forgot his email or password that time we need to throw a custom error
// const error2 = new Error();
// error2.message = "Invalid email or password.";
// console.log(error2);

function login(email, password) {
  // Check email and password is not empty
  // Check email in correct format
  // Check email password into database
  // yes or no
  if (email && password) {
    return { email, password };
  }
  throw new Error("Invalid email or password!");
}

// function handleUserLogin() {
//   console.log("inside handleUserLogin");
//   const response = login("abc@gmail.com");
//   console.log("inside try: ", response);
// }

function handleUserLogin() {
  try {
    const response = login("abc@gmail.com", "abc");
    console.log("Success: ", response);
  } catch (err) {
    console.log("Error: ", err.message);
  } finally {
    console.log("=========Finally===========");
  }
}

handleUserLogin();
