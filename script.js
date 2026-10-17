import { getDateInfo } from "./utils/date-info.js";

let { day, month, addDate, addDay, addMonth, addYear } = getDateInfo();

document.getElementById("demo").innerHTML = day + ", " + addDate + " " + month + " " + addYear;

for (let i = 1; i <= 31; i++) {
  console.log(i);
}

const dateDiv = document.createElement("div");
dateDiv.textContent = i;
document.getElementById("date").appendChild(dateDiv);