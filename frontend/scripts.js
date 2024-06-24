document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const tasksDiv = document.getElementById("tasks");
  const saveButton = document.getElementById("saveButton");
  let editingTaskId = null;

  taskForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const task = {
          TaskName: document.getElementById("title").value,
          Description: document.getElementById("description").value,
          Priority: parseInt(document.getElementById("priority").value),
          DueDate: new Date(document.getElementById("dueDate").value).toISOString(),
          Status: document.getElementById("status").value,
      };

      try {
          const response = await fetch("http://localhost:5102/api/tasks", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(task),
          });

          if (response.ok) {
              loadTasks();
              taskForm.reset();
          } else {
              console.error("Error:", response.statusText);
          }
      } catch (error) {
          console.error("Fetch error:", error);
      }
  });

  saveButton.addEventListener("click", async () => {
      const task = {
          TaskId: editingTaskId,
          TaskName: document.getElementById("title").value,
          Description: document.getElementById("description").value,
          Priority: parseInt(document.getElementById("priority").value),
          DueDate: new Date(document.getElementById("dueDate").value).toISOString(),
          Status: document.getElementById("status").value,
      };

      try {
          const response = await fetch(`http://localhost:5102/api/tasks/${editingTaskId}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(task),
          });

          if (response.ok) {
              loadTasks();
              taskForm.reset();
              editingTaskId = null;
              saveButton.style.display = "none";
              document.querySelector(".addButton").style.display = "block";
          } else {
              console.error("Error:", response.statusText);
          }
      } catch (error) {
          console.error("Fetch error:", error);
      }
  });

  async function loadTasks() {
      try {
          const response = await fetch("http://localhost:5102/api/tasks");
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const tasks = await response.json();

          tasksDiv.innerHTML = "";
          tasks.forEach((task) => {
              const taskDiv = document.createElement("div");
              taskDiv.className = `task ${task.status.toLowerCase()}`;
              taskDiv.innerHTML = `
                  <h3>${task.taskName}</h3>
                  <p>${task.description}</p>
                  <p>Priority: ${task.priority}</p>
                  <p>Due Date: ${new Date(task.dueDate).toLocaleDateString()}</p>
                  <p>Status: ${task.status}</p>
                  <button class="deleteButton" onclick="deleteTask(${task.taskId})">Delete</button>
                  <button class="editButton" onclick="editTask(${task.taskId})">Edit</button>
              `;
              tasksDiv.appendChild(taskDiv);
          });
      } catch (error) {
          console.error("Fetch error:", error);
      }
  }

  window.deleteTask = async function (taskId) {
      try {
          const response = await fetch(
              `http://localhost:5102/api/tasks/${taskId}`,
              {
                  method: "DELETE",
              }
          );

          if (response.ok) {
              loadTasks();
          } else {
              console.error("Error:", response.statusText);
          }
      } catch (error) {
          console.error("Fetch error:", error);
      }
  };

  window.editTask = async function (taskId) {
      try {
          const response = await fetch(`http://localhost:5102/api/tasks/${taskId}`);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const task = await response.json();
          editingTaskId = taskId;
          document.getElementById("title").value = task.taskName;
          document.getElementById("description").value = task.description;
          document.getElementById("priority").value = task.priority;
          document.getElementById("dueDate").value = new Date(task.dueDate).toISOString().substring(0, 10);
          document.getElementById("status").value = task.status;

          document.querySelector(".addButton").style.display = "none";
          saveButton.style.display = "block";
      } catch (error) {
          console.error("Fetch error:", error);
      }
  };

  loadTasks();
});
