import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  spinLoginBtn:boolean = false
constructor(private _AuthService:AuthService , private _Router:Router ){}
loginForm:FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required , Validators.email ]),
  password: new FormControl('',[Validators.required , Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/) ]),
})
handelingLogin(){
  this.spinLoginBtn = true ,
  
  this._AuthService.loginApiCall(this.loginForm.value).subscribe({
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
