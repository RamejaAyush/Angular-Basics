import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() assignValue: string = '';
  @Output() ageOfUser = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  sendIt() {
    this.ageOfUser.emit(21);
  }
}
