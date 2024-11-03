import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  createForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['pending', Validators.required]
    });
  }

  onSubmit() {
    if (this.createForm.valid) {
      this.taskService.createTask(this.createForm.value).subscribe(() => {
        console.log('Task created successfully');
      });
    }
  }
}
