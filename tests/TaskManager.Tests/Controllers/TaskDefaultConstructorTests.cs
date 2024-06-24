using System;
using Xunit;
using TaskTest = TaskManager.Models.Task;

namespace TaskManager.Tests.Models
{
    public class TaskDefaultConstructorTests
    {
        [Fact]
        public void Task_DefaultConstructor_ShouldSetDefaults()
        {
            // Arrange
            var task = new TaskTest();

            // Assert
            Assert.Equal("", task.TaskName);
            Assert.Equal("", task.Description);
            Assert.Equal("", task.Status);
            Assert.Equal(0, task.Priority);
        }
    }
}














