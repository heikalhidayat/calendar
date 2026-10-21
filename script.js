let day;
let month;
let addDate = new Date().getDate();
let addDay = new Date().getDay();
let addMonth = new Date().getMonth();
let addYear = new Date().getFullYear();

switch (addDay) {
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

switch (addMonth) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
}

function thisMonth() {
  if (addMonth === 0 || addMonth === 2 || addMonth === 4 || addMonth === 6 || addMonth === 7 || addMonth === 9 || addMonth === 11) {
    return 31;
  } else if (addMonth === 3 || addMonth === 5 || addMonth === 8 || addMonth === 10) {
    return 30;
  } else {
    if ((addYear % 400 === 0) || (addYear % 4 === 0 && addYear % 100 !== 0)) {
      return 29;
    } else {
      return 28;
    }
  }
}

const firstDay = new Date(addYear, addMonth, 1).getDay();
console.log(firstDay);
function date() {
  for (let i = 1; i <= firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.textContent = " ";
    document.getElementById("date").appendChild(emptyDiv);
  }
  for (let i = 1; i <= thisMonth(); i++) {
    const dateDiv = document.createElement("div");
    dateDiv.textContent = i;
    document.getElementById("date").appendChild(dateDiv);
  }
}

document.getElementById("demo").innerHTML = day + ", " + addDate + " " + month + " " + addYear;
date()