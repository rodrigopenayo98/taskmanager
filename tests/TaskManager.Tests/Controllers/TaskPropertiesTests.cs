using System;
using Xunit;
using TaskTest = TaskManager.Models.Task;

namespace TaskManager.Tests.Models
{
    public class TaskPropertiesTests
    {
        [Fact]
        public void Task_Properties_ShouldBeSetCorrectly()
        {
            // Arrange
            var task = new TaskTest
            {
                TaskId = 1,
                TaskName = "Sample Task",
                Description = "Sample Description",
                DueDate = DateTime.Now.AddDays(1),
                Priority = 2,
                Status = "Pending"
            };

            // Assert
            Assert.Equal(1, task.TaskId);
            Assert.Equal("Sample Task", task.TaskName);
            Assert.Equal("Sample Description", task.Description);
            Assert.Equal(DateTime.Now.AddDays(1).Date, task.DueDate.Date);
            Assert.Equal(2, task.Priority);
            Assert.Equal("Pending", task.Status);
        }
    }
}
