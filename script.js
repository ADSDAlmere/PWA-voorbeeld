// In-memory storage for tasks
let tasks = [];

const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");

// Function to update the task list
function updateTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Add a task
addTaskButton.addEventListener("click", () => {
    const task = prompt("Enter a new task:");
    if (task) {
        tasks.push(task);
        updateTaskList();
    }
});

// Register the service worker (service-worker.js)
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(registration => {
            console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch(error => {
            console.error("Service Worker registration failed:", error);
        });
}
