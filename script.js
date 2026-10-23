const state = {
  date: new Date()
}
const notes = {};
let selectedKey = null;

function renderCalendar() {
  const year = state.date.getFullYear();
  const month = state.date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthLabel = document.getElementById("thisMonth");
  monthLabel.textContent = new Date(year, month).toLocaleString("en-us", {
    month: "long",
    year: "numeric"
  }).toUpperCase();

  const dateContainer = document.getElementById("date");
  dateContainer.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.textContent = "";
    dateContainer.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement("div");
    const selec = document.getElementById("selected");
    cell.textContent = d;
    cell.addEventListener("click", function () {
      selec.textContent = new Date(year, month, d).toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
      notes[d, "-", (month + 1), "-", year]
    })
    dateContainer.appendChild(cell);
  }
}

function prevMonth() {
  state.date.setMonth(state.date.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  state.date.setMonth(state.date.getMonth() + 1);
  renderCalendar();
}

renderCalendar();