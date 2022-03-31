import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  userId : string ='';
  userDetails : any;
  constructor(private userService:UserService,private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id'];
      console.log(this.userId);
    });
    this.userService.viewuser(this.userId).subscribe(data=>{
      this.userDetails = data;
      console.log(data);
    }
    )
  }

}
