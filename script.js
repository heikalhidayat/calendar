const state = {
  currentDate: new Date(),
  selectedDateKey: null,
  notes: JSON.parse(localStorage.getItem("calendarNotes")) || "{}",
};

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function setMonth(monthOffset) {
  state.currentDate.setMonth(state.currentDate.getMonth() + monthOffset);
  renderCalendar();
}

function renderCalendar() {
  const year = state.currentDate.getFullYear();
  const month = state.currentDate.getMonth();

  const monthLabel = document.getElementById("thisMonth");
  monthLabel.textContent = new Date(year, month).toLocaleString("en-us", {
    month: "long",
    year: "numeric"
  }).toUpperCase();

  const dateContainer = document.getElementById("date");
  dateContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "empty-cell";
    dateContainer.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    const date = new Date(year, month, day);
    const key = formatDateKey(date);

    cell.textContent = day;
    cell.classList.add("day-cell");

    if (key === state.selectedDateKey) {
      cell.classList.add("selected");
    }
    
    if (state.notes[key]) {
      cell.classList.add("has-note");
      const dot = document.createElement("span");
      dot.textContent = ".";
      dot.className = "note-dot";
      cell.appendChild(dot);
    }

    cell.addEventListener("click", function () {
      state.selectedDateKey = key;
      
      const selectedLabel = document.getElementById("selected");
      selectedLabel.textContent = date.toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      const noteInput = document.getElementById("noteInput");
      noteInput.value = state.notes[key] || " ";

      renderCalendar();
    });
    
    dateContainer.appendChild(cell);
  }
}

function saveNote() {
  if (!state.selectedDateKey) {
    alert("Please select a date first.");
    return;
  }

  const noteInput = document.getElementById("noteInput");
  state.notes[state.selectedDateKey] = noteInput.value.trim();

  localStorage.setItem("calendarNotes", JSON.stringify(state.notes));

  renderCalendar();
}

document.getElementById("prevMonth").addEventListener("click", function () {
  setMonth(-1);
});

document.getElementById("nextMonth").addEventListener("click", function () {
  setMonth(1);
});

document.getElementById("saveNote").addEventListener("click", saveNote);

renderCalendar();