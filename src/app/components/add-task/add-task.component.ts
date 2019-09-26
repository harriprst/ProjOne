import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @ViewChild('tasksForm', { static : false }) tasksForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  addTasks(form: NgForm) {
    console.log('add tasks method is called');
    console.log(this.tasksForm.form.value.text);
    console.log(this.tasksForm.form.value.site);
    console.log(this.tasksForm.form.value.resource);
    console.log(this.tasksForm.form.value.status);
    console.log(this.tasksForm.form.value.hours);
    console.log(this.tasksForm.form.value.startDate);
    console.log(this.tasksForm.form.value.endDate);

    alert('task created succesfully');
  }



}
