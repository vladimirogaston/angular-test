import { User } from './user.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user')
  user: User;

  @Output('userDelete')
  userDelete = new EventEmitter<number>();

  constructor() {
    this.user = null;
  }

  ngOnInit(): void {
  }

  public onDelete(): void {
    console.log('presionando boton delete id: ' + this.user.id);
    this.userDelete.emit(this.user.id);
  }
}
