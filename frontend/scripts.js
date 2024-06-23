document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const tasksDiv = document.getElementById('tasks');

  taskForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const task = {
          title: document.getElementById('title').value,
          description: document.getElementById('description').value,
          priority: document.getElementById('priority').value,
          dueDate: document.getElementById('dueDate').value,
          status: document.getElementById('status').value
      };

      const response = await fetch('api/tasks', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
      });

      if (response.ok) {
          loadTasks();
          taskForm.reset();
      }
  });

  async function loadTasks() {
      const response = await fetch('api/tasks');
      const tasks = await response.json();

      tasksDiv.innerHTML = '';
      tasks.forEach(task => {
          const taskDiv = document.createElement('div');
          taskDiv.className = `task ${task.status.toLowerCase()}`;
          taskDiv.innerHTML = `
              <h3>${task.title}</h3>
              <p>${task.description}</p>
              <p>Priority: ${task.priority}</p>
              <p>Due Date: ${new Date(task.dueDate).toLocaleDateString()}</p>
              <p>Status: ${task.status}</p>
              <button onclick="deleteTask(${task.taskId})">Delete</button>
          `;
          tasksDiv.appendChild(taskDiv);
      });
  }

  window.deleteTask = async function (taskId) {
      const response = await fetch(`api/tasks/${taskId}`, {
          method: 'DELETE'
      });

      if (response.ok) {
          loadTasks();
      }
  };

  loadTasks();
});
