import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  logout($event) {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
