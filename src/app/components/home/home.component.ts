import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router, private service: HomeService) {}

  username: any = 'Home Section';

  responseData: any = {};

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.responseData = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  goToProjects() {
    this.route.navigate(['/projects']);
  }
}
