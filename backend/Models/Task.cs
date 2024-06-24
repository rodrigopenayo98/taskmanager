using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManager.Models
{
   public class Task
{
    public Task()
    {
        TaskName = "";
        Description = "";
        Status = "";
        Priority = 0;
    }

    public int TaskId { get; set; }
    public string TaskName { get; set; }
    public string Description { get; set; }
    public DateTime DueDate { get; set; }
    public int Priority { get; set; }
    public string Status { get; set; }
}


}



