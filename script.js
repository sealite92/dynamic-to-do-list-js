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
});
