const A = [1, 2, 3, 4, 5, 2, 3, 7];
// Keep 5
// Remove 5

const B = A.filter((value, index) => {
  if (value === 5) {
    return false;
  } else {
    return true;
  }
});

console.log("B=", B);
