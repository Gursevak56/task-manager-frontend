import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskCreateComponent } from './tasks/task-create.component';
import { TaskUpdateComponent } from './tasks/task-update.component';
import { TaskListComponent } from './tasks/task-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskUpdateComponent,
    TaskListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, // Add RouterModule here
    AppRoutingModule // Make sure AppRoutingModule is added
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true // Allow multiple interceptors to be added
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
