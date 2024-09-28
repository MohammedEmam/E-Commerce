import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forgot-passwords',
  templateUrl: './forgot-passwords.component.html',
  styleUrls: ['./forgot-passwords.component.scss']
})
export class ForgotPasswordsComponent {
spin:boolean = false
  constructor(private _AuthService:AuthService , private _Router:Router){}
  emailForm = new FormGroup ({
  email:new FormControl('',[Validators.required,Validators.email])
})

  sendEmailForgotPassword(){
    this.spin = true
this._AuthService.ForgotPassword(this.emailForm.value).subscribe({
  next:(response)=>{
    this.spin = false    
    if (response.statusMsg == 'success'){
      this._Router.navigate(['verifyResetCode']);
    }
  },
  error:(err)=>{
    this.spin = false

  }
})
  }
}
