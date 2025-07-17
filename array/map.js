const A = [1, 2, 3, 4, 5, 2, 3, 7];
// const A = new Set([1, 2, 3, 4, 5, 2, 3, 7, 8, 9, 10, 15]);
// const C = [1, 2, 3, 4, 5, 2, 3]

// console.log(A[0]);
// console.log(A[1]);
// console.log(A[2]);
// console.log(A[3]);
// console.log(A[4]);
// console.log(A[5]);
// console.log("length: ", A.length);

for (let i = 0; A.length > i; i++) {
  console.log("Index: ", i, A[i]);
}
console.log("=============");

const B = A.map((value, index) => {
  console.log("Index: ", index, value);
  return value;
});

console.log("results=", B);
