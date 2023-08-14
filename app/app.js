const inputEl = document.getElementById("input-box");
const listEl = document.getElementById("list-container");

const taskBtn = document.getElementById("btn");

taskBtn.addEventListener("click", addTask);

function addTask() {
  // Check if user writes in an input
  if (inputEl.value === "") {
    alert("You must write something");
  } else {
    // create a list element and upload the input value as a child list for the list container
    let li = document.createElement("li");
    li.innerHTML = inputEl.value;
    listEl.appendChild(li);

    let span = document.createElement("span");
    // code for x icon
    span.innerHTML = "\u00d7";
    // NOTE:APPEND TO LI NOT UL
    li.appendChild(span);
  }
  // clear input value
  inputEl.value = "";
  saveData();
}

listEl.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listEl.innerHTML);
}

function showTask() {
  listEl.innerHTML = localStorage.getItem("data");
}

showTask();
