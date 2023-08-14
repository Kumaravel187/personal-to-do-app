// Get references to HTML elements
const inputEl = document.getElementById("input-box");
const listEl = document.getElementById("list-container");
const taskBtn = document.getElementById("btn");

// Add click event listener to task button
taskBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  // Check if user writes in an input
  if (inputEl.value === "") {
    alert("You must write something");
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = inputEl.value; // Set the input value as the list item content
    listEl.appendChild(li); // Add the list item to the list container

    // Create a delete icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // X icon
    li.appendChild(span); // Append the delete icon to the list item
  }

  // Clear the input value
  inputEl.value = "";

  // Save the updated data
  saveData();
}

// Add click event listener to the list container
listEl.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Toggle the "checked" class on list item click
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Remove the parent list item when the delete icon is clicked
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Function to save data to local storage
function saveData() {
  localStorage.setItem("data", listEl.innerHTML);
}

// Function to show saved tasks on page load
function showTask() {
  listEl.innerHTML = localStorage.getItem("data");
}

// Show saved tasks when the page loads
showTask();
