import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: string = 'Harshitha S';
  alertTheAge(ageOfUser: number) {
    alert(`Age of user is : ${ageOfUser}`);
  }
}
