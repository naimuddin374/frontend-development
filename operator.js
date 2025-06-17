/**
 * = Assignment Operator
 * + Addition Operator
 * - Subtraction Operator
 * * Multiplication Operator
 * / Division Operator
 * ++ Increment Operator
 * % Modulus Operator
 * ** Exponentiation Operator
 */

const name = "Rezon";
const profession = "Student";

let age = 15; // Assigning a value to age
age = age - 10; // Subtracting 10 from age resulting in 5
age = age * 10; // Multiplying age by 10 resulting in 50
age = age / 2; // Dividing age by 2 resulting in 25

++age; // Incrementing age by 1 resulting in 26
++age; // Incrementing age by 1 again resulting in 27
age = age % 10; // Modulus operation, 27 % 10 results in 7
age = age ** 2; // Exponentiation, 7 squared results in 49
age = age / 2; // Dividing age by 2 resulting in 24.5

const result =
  name + " is " + age + " years old and he is a " + profession + ".";
console.log(result);
