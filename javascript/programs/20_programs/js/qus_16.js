const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Add a new task to the list
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="remove-button">Remove</button>
    `;

    taskItem.querySelector("button.remove-button").addEventListener("click", removeTask);
    taskItem.addEventListener("click", toggleTaskCompletion);

    taskList.appendChild(taskItem);

    newTaskInput.value = "";
}

// Remove a task from the list
function removeTask(event) {
    const taskItem = event.target.closest("li");
    if (taskItem) {
        taskItem.remove();
    }
}

// Toggle task completion status
function toggleTaskCompletion(event) {
    const taskItem = event.currentTarget;
    const taskText = taskItem.querySelector(".task-text");
    taskText.classList.toggle("completed");
}

addTaskButton.addEventListener("click", addTask);
newTaskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});