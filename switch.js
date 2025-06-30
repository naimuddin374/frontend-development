const today = new Date().getDay();
console.log("today=>", today);

let day = "";
switch (today) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);

const month = new Date().getMonth();
console.log("month:", month);

let text;
switch (month) {
  case 0:
    text = "January";
    break;
  case 1:
    text = "February";
    break;
  case 2:
    text = "March";
    break;
  case 3:
    text = "April";
    break;
  case 4:
    text = "May";
    break;
  case 5:
    text = "Jun";
    break;
  case 6:
    text = "July";
    break;
  case 7:
    text = "August";
    break;
  case 8:
    text = "September";
    break;
  case 9:
    text = "October";
    break;
  case 10:
    text = "November";
    break;
  case 11:
    text = "December";
    break;
}

console.log(text);
