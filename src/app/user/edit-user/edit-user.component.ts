import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId : any;
  userDetails : any ;
  dataLoaded : boolean = false;
  editUserForm : FormGroup = new FormGroup({});
  constructor(private activatedRoute: ActivatedRoute,private userService:UserService,
    private formBuilder : FormBuilder,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    })
    if(this.userId !== ''){
      //view user details
      this.userService.viewuser(this.userId)
      .toPromise()
      .then(data => { 
        this.userDetails = data;
        Object.assign(this.userDetails,data);
        
        //Build the edit form 
        this.editUserForm = this.formBuilder.group({
          'username':new FormControl(this.userDetails.username),
          'email':new FormControl(this.userDetails.email),
          'phone':new FormControl(this.userDetails.phone),
        })
        this.dataLoaded = true;
        console.log(this.editUserForm.value);
      })
      .catch(err=>{
        console.log(err);
      })
    }
    
    }
    updateUser(){
      this.userService.updateUser(this.userId,this.editUserForm.value).subscribe(data=>{
        console.log(data); 
        this._snackBar.open('User Updated Successfully', 'Close', {
           duration: 2000,
           
         });
       },err=>{
         console.log(err);
         
       })       
    }
  }


