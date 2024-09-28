import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  spinLoginBtn:boolean = false
  constructor(private _AuthService:AuthService , private _Router:Router){}
  ResetPasswordForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email ]),
    newPassword: new FormControl('',[Validators.required , Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/) ]),
  })
  ResetPassword(){
    this.spinLoginBtn = true ,
    this._AuthService.ResetPassword(this.ResetPasswordForm.value).subscribe({
      next:(response)=>{
        if (response.message == "success"){
          localStorage.setItem("_token",response.token)
          this.spinLoginBtn = false ;
          this._Router.navigate(['home']);
    
        }
      },
      error:(err)=>{
        this.spinLoginBtn = false ;
  
      },
      complete:()=>{
        this.spinLoginBtn = false ;
  
      }
    })  
  }
  

}
