import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
 
  addUserForm : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder,private userService : UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phone':new FormControl('',[Validators.required,Validators.minLength(10)]),
    })

}
  createUser(){
     this.userService.addUser(this.addUserForm.value).subscribe(data=>{
      console.log(data); 
      this._snackBar.open('User Added Successfully', 'Close', {
         duration: 2000,
         
       });
     },err=>{
       console.log(err);
       
     })
  }
}