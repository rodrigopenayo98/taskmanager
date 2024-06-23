using System;

namespace TaskManager.Models
{
    public class Task
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public string Status { get; set; }

        public Task()
        {
            Title = string.Empty;
            Description = string.Empty;
            Priority = 0;
            Status = string.Empty;
        }
    }
}

