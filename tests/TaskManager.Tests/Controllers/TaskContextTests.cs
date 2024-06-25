using Microsoft.EntityFrameworkCore;
using TaskManager.Data;
using TaskManager.Models;
using Xunit;
using TaskTest = TaskManager.Models.Task;

namespace TaskManager.Tests.Data
{
    public class TaskContextTests : IDisposable
    {
        private readonly DbContextOptions<TaskContext> _options;
        private TaskContext _context;

        public TaskContextTests()
        {
            _options = new DbContextOptionsBuilder<TaskContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase" + System.Guid.NewGuid().ToString()) // Genera un nombre de base de datos único cada vez
                .Options;

            InitializeDatabase();
        }

        private void InitializeDatabase()
        {
            _context = new TaskContext(_options);
            _context.Tasks.Add(new TaskTest { TaskId = 1, TaskName = "Task 1", Description = "Description 1", Status = "Pending", Priority = 1 });
            _context.Tasks.Add(new TaskTest { TaskId = 47, TaskName = "Task 2", Description = "Description 2", Status = "Completed", Priority = 2 });

            _context.SaveChanges();
        }

        [Fact]
        public void TaskContext_CanAddTask()
        {
            var newTaskId = GetNewTaskId();
            var task = new TaskTest { TaskId = newTaskId, TaskName = "Task 3", Description = "Description 3", Status = "InProgress", Priority = 3 };

            _context.Tasks.Add(task);
            _context.SaveChanges();

            var addedTask = _context.Tasks.Find(task.TaskId);
            Assert.NotNull(addedTask);
            Assert.Equal(task.TaskName, addedTask.TaskName);
            Assert.Equal(task.Description, addedTask.Description);
            Assert.Equal(task.Status, addedTask.Status);
            Assert.Equal(task.Priority, addedTask.Priority);
        }

        [Fact]
        public void TaskContext_CanRetrieveTask()
        {
            // Act
            var task = _context.Tasks.Find(1);

            // Assert
            Assert.NotNull(task);
            Assert.Equal("Task 1", task.TaskName);
            Assert.Equal("Description 1", task.Description);
            Assert.Equal("Pending", task.Status);
            Assert.Equal(1, task.Priority);
        }

        private int GetNewTaskId()
        {
            var maxTaskId = _context.Tasks.Max(t => (int?)t.TaskId) ?? 0;
            return maxTaskId + 1;
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}






