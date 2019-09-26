import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    console.log(form.value);
    this.authService.setauthenticated();
    this.router.navigate(['dashboard']);
 }
}
