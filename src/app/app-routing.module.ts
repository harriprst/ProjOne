import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AuthGuard } from './guards/auth-guard.service';


const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent , canActivate : [AuthGuard] },
  {path : 'addTask', component : AddTaskComponent, canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
