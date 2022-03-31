import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.userService.listUsers().subscribe(data=>{
     this.listUsers = data;
   })
  }

}
