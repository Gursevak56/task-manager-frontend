import { Component, OnInit } from '@angular/core';
import { TaskService } from './tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
        console.log(tasks)
      this.tasks = tasks;
    });
  }

  deleteTask(id: string) {// Do nothing if id is undefined
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task._id !== id);
    });
  }
  updateTask(id:string,task:Task){
    this.taskService.updateTask(id,task).subscribe(()=>{
        return
    })
  }
}
