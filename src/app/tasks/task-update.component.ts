import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html'
})
export class TaskUpdateComponent {
  updateForm!: FormGroup;
  taskId!: string;
  loading = false;

  constructor(private fb: FormBuilder, private taskService: TaskService,private router: Router,private route: ActivatedRoute,) {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['pending', Validators.required]
    });
  }
  ngOnInit(): void {
    this.taskId = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.taskId).subscribe((task) => {
      this.updateForm = this.fb.group({
        title: [task.title, Validators.required],
        description: [task.description, Validators.required],
        status: [task.status, Validators.required]
      });
    });
  }
  onSubmit() {
    if (this.updateForm.valid) {
        this.taskService.createTask(this.updateForm.value).subscribe(() => {
          console.log('Task updated successfully');
          this.router.navigate(['/tasks']);
        });
      }
  }

}
