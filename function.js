// What is function in JavaScript?
// A function is a block of code designed to perform a particular task.

// Function without parameters
function myFunction() {
  console.log("Im am inside myFunction!");
}
// myFunction();

// Function with parameters
function myFunctionWithParams(p1, p2, p3) {
  console.log("Im am inside myFunctionWithParams!");
  console.log("p1:", p1);
  console.log("p2:", p2);
  console.log("p3:", p3);
}
// myFunctionWithParams("Tamim", "Rezon", "Biddut");
// myFunctionWithParams(100, 200, 300);

// Function with return value
function add(a, b) {
  const result = a + b;
  console.log("Result:", result);
  return result;
}
// add(10, 20);
// add(50, 55);
// add(100, 150);

// Function with return value and parameters
function concatParams(firstName, lastName, age, profession) {
  //   const result = `My name is ${firstName} ${lastName}, I am ${age} years old and I am a ${profession}.`;
  const result = `Result: ${firstName} ${lastName} is a ${profession}, He is ${age} years old.`;
  return result;
}
// const person1 = concatParams("Md", "Tamim", 25, "Teacher");
// console.log(person1);
// const person2 = concatParams("Md", "Rezon", 22, "Student");
// console.log(person2);
// const person3 = concatParams("Md", "Biddut", 25, "Student");
// console.log(person3);
// const person4 = concatParams("Md", "Shahriar", 25, "Student");
// console.log(person4);
// const person5 = concatParams("Al", "Amin", 30, "Businessman");
// console.log(person5);

// Example: Sum function
function sum(a, b) {
  const result = a + b;
  console.log("I am inside sum function!");
  return result;
}
// const sum1 = sum(30, 20);
// console.log("Sum 1:", sum1);

function myFunc(name, age, profession) {
  let result = `My name is ${name}`;

  if (age < 18) {
    result += `, I am ${age} years old and I am a student.`;
    console.log("console log 01");
    return result;
  } else {
    console.log("console log 02");
    result += `, I am ${age} years old and I am a ${profession}.`;
    return result;
  }
}

// const person1 = myFunc("Tamim", 25, "Teacher");
// const person2 = myFunc("Rezon", 17, "Doctor");
// console.log(person2);
// const person3 = myFunc("Biddut", 19, "Unemployed");
// const person4 = myFunc("Shahriar", 20, "Unemployed");
// const person5 = myFunc("Al Amin", 30, "Businessman");

// console.log(person1);
// console.log(person3);
// console.log(person4);
// console.log(person5);

function sum(a, b) {
  const result = a + b;
  return result;
}
// console.log(sum(10, 20)); // 30
// console.log(sum(20, 15)); // 35
// console.log(sum(100, 200)); // 300

function subtract(a, b) {
  const result = a - b;
  return result;
}
// console.log(subtract(20, 10)); // 10
// console.log(subtract(100, 50)); // 50
// console.log(subtract(200, 100)); // 100

function multiply(a, b) {
  console.log(`A is: ${a}, B is: ${b}`);
  const result = a * b;
  return result;
}
// console.log(multiply(10, 20)); // 200
// console.log(multiply(5, 6)); // 30

function divisionTamim(a, b, c, d) {
  const result1 = a + b;
  const result2 = c - d;

  const result = result1 + result2;
  return result;
}

console.log(divisionTamim(100, 20, 30, 40)); // 100
console.log(divisionTamim(50, 15, 25, 35)); // 80

// Assignment: 10 functions
