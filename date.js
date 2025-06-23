// new Date().toLocaleString("en", { timeZone: "America/New_York" })

// let usTime = new Date().toLocaleString("en", { timeZone: "America/New_York" });
// console.log(usTime.toLocaleString());

let today = new Date();
console.log(today);
console.log(today.toLocaleString());

console.log(
  today.getDay(),
  today.getDate(),
  today.getMonth(),
  today.getFullYear()
);

// const nDate = new Date(today.setDate(27));
// console.log(nDate.toLocaleString());

console.log(new Date(today.setMonth(today.getMonth() + 1)).toLocaleString());
