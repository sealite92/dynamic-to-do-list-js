document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    } else {
      alert("Please enter a task");
    }
  };

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
  function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  loadTasks();
});
