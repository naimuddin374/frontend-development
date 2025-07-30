// Way to define a variable
// Const, let, var
// Var a global variable
// Let a block scoped variable
// Const a constant variable, cannot be reassigned
// var name = "John Doe"; // Global variable
// name = "Tamim Iqbal"; // Reassigning a global variable

// let age = 25; // Block scoped variable
// age = 30; // Reassigning a block scoped variable

// const email = "tamim@gmail.com"
// email = "abc@gmail.com"

// const person ={
//   name: 'Tamim Iqbal',
//   age: 30,
//   email: 'tamim@gmail.com',
//   address: 'dhaka',
//   profession: 'Student'
// }

// person.name = "Shakib Al Hasan"; // Reassigning a property of an object
// person = 20 // This will throw an error because we cannot reassign a constant variable

const country = document.getElementById("country");
country.onchange = function () {
  const value = country.value;
  const state = document.getElementById("state");
  if (value === "bd") {
    state.innerHTML = `<option value="" disabled selected>Select Country</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="khulna">Khulna</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="barisal">Barisal</option>
                        <option value="rangpur">Rangpur</option>
                        <option value="mymensingh">Mymensingh</option>
                        <option value="rajshahi">Rajshahi</option>`;
  } else if (value === "usa") {
    state.innerHTML = `<option value="" disabled selected>Select Country</option>
                        <option value="california">California</option>
                        <option value="texas">Texas</option>
                        <option value="florida">Florida</option>
                        <option value="new-york">New York</option>
                        <option value="illinois">Illinois</option>
                        <option value="pennsylvania">Pennsylvania</option>
                        <option value="ohio">Ohio</option>
                        <option value="georgia">Georgia</option>`;
  } else if (value === "uk") {
    state.innerHTML = `<option value="" disabled selected>Select Country</option>
                        <option value="england">England</option>
                        <option value="scotland">Scotland</option>
                        <option value="wales">Wales</option>
                        <option value="northern-ireland">Northern Ireland</option>`;
  } else {
    state.innerHTML = `<option value="" disabled selected>Select Country</option>`;
  }
};

const state = document.getElementById("state");
state.onchange = function () {
  const value = state.value;
  const city = document.getElementById("city");
  if (value === "dhaka") {
    city.innerHTML = `<option value="" disabled selected>Select City</option>
                        <option value="madaripur">Madaripur</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="narayanganj">Narayanganj</option>
                        <option value="gazipur">Gazipur</option>
                        <option value="tangail">Tangail</option>`;
  } else if (value === "chittagong") {
    city.innerHTML = `<option value="" disabled selected>Select City</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="cox-bazar">Cox's Bazar</option>
                        <option value="feni">Feni</option>
                        <option value="noakhali">Noakhali</option>`;
  } else if (value === "california") {
    city.innerHTML = `<option value="" disabled selected>Select City</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="san-francisco">San Francisco</option>
                        <option value="san-diego">San Diego</option>
                        <option value="sacramento">Sacramento</option>`;
  } else if (value === "texas") {
    city.innerHTML = `<option value="" disabled selected>Select City</option>
                        <option value="houston">Houston</option>
                        <option value="austin">Austin</option>
                        <option value="dallas">Dallas</option>
                        <option value="san-antonio">San Antonio</option>`;
  } else if (value === "england") {
    city.innerHTML = `<option value="" disabled selected>Select City</option>
                        <option value="london">London</option>
                        <option value="manchester">Manchester</option>
                        <option value="birmingham">Birmingham</option>
                        <option value="liverpool">Liverpool</option>`;
  } else if (value === "scotland") {
    city.innerHTML = `<option value="" disabled selected>Select City</option>
                        <option value="edinburgh">Edinburgh</option>
                        <option value="glasgow">Glasgow</option>
                        <option value="aberdeen">Aberdeen</option>`;
  } else {
    city.innerHTML = `<option value="" disabled selected>Select City</option>`;
  }
};

// Function to create a new input field
function createErrorMessage(fieldName, message = "") {
  const errorMessage = document.createElement("p");
  // if(message){
  //   errorMessage.textContent = message;
  // }else{
  //   errorMessage.textContent = `Please enter your ${fieldName.name}.`;
  // }
  errorMessage.textContent = message
    ? message
    : `Please enter your ${fieldName.name}.`;
  errorMessage.style.color = "red";
  errorMessage.className = "error-message";

  fieldName.parentNode.parentNode.insertBefore(
    errorMessage,
    fieldName.parentNode.nextSibling
  );
}

// Form validation
function validateForm() {
  // Remove any existing error message for this field
  const existingErrors = document.getElementsByClassName("error-message");
  // Convert HTMLCollection to array to avoid issues with live collection
  const errorArray = Array.from(existingErrors);
  errorArray.forEach((error, i) => {
    console.log(i, error);
    error.remove();
  });

  let validationSuccess = true;
  const name = document.getElementById("name");
  if (!name.value) {
    createErrorMessage(name);
    validationSuccess = false;
  }
  const email = document.getElementById("email");
  if (!email.value) {
    createErrorMessage(email);
    validationSuccess = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    createErrorMessage(email, "Please enter a valid email address.");
    validationSuccess = false;
  }

  const password = document.getElementById("password");
  if (!password.value) {
    createErrorMessage(password);
    validationSuccess = false;
  } else if (password.value.length < 6) {
    createErrorMessage(
      password,
      "Password must be at least 6 characters long."
    );
    validationSuccess = false;
  }

  const age = document.getElementById("age");
  if (!age.value) {
    createErrorMessage(age);
    validationSuccess = false;
  } else if (!/^\d+$/.test(age.value) || age.value < 18 || age.value > 100) {
    createErrorMessage(age, "Please enter a valid age (18-100).");
    validationSuccess = false;
  }

  const phone = document.getElementById("phone");
  if (!phone.value) {
    createErrorMessage(phone);
    validationSuccess = false;
  } else if (!/^\d{10}$/.test(phone.value)) {
    createErrorMessage(phone, "Please enter a valid phone number (10 digits).");
    validationSuccess = false;
  }
  const address = document.getElementById("address");
  if (!address.value) {
    createErrorMessage(address);
    validationSuccess = false;
  }

  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    createErrorMessage(document.getElementsByName("gender")[0]);
    validationSuccess = false;
  }

  const country = document.getElementById("country");
  if (!country.value) {
    createErrorMessage(country);
    validationSuccess = false;
  }
  const state = document.getElementById("state");
  if (!state.value) {
    createErrorMessage(state);
    validationSuccess = false;
  }

  const city = document.getElementById("city");
  if (!city.value) {
    createErrorMessage(city);
    validationSuccess = false;
  }

  return validationSuccess;
}

// Form submission
// document.getElementById("city") // Return single element
// document.getElementsByTagName("form") // Return multiple elements
// document.getElementsByClassName("form") // Return multiple elements

const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  const validationStatus = validateForm(event);
  if (!validationStatus) {
    window.scrollTo(0, 0); // Scroll to the top of the page if validation fails
    return; // Stop form submission if validation fails
  }
  alert("Form submitted successfully!");
  // Here you can add code to handle the form submission, like sending data to a server.
  // get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const address = document.getElementById("address").value;
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log(`Phone: ${phone}`);
  console.log(`Age: ${age}`);
  console.log(`Gender: ${gender}`);
  console.log(`Address: ${address}`);
  console.log(`Country: ${country}`);
  console.log(`State: ${state}`);
  console.log(`City: ${city}`);
});

/*
1. Create a html form with the following fields:
    - Name (text input)
    - Email (text input)
    - Password (password input)
    - Phone (text input)
    - Age (number input)
    - ....

  2. Design with css
  3. Dynamic country, state, city dropdowns
  4. Add validation to the form using javascript on submit
  5. Remove validation error messages before showing new error messages
  6. Console form values on submit
  */
