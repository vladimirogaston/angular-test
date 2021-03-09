import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.fetchFromUpstream();
  }

  private fetchFromUpstream(): void {
    this.us.findAll().subscribe(data => {
      this.users = data;
    });
  }

  public onDeleteUser(userId: number): void {
    console.log('procesando eventodelete id:' + userId);
    this.us.deleteById(userId).subscribe(response=>{
      this.fetchFromUpstream();
    });
  }
}
