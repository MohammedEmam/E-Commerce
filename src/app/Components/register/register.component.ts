import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators, FormControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  spinRegisterBtn:boolean = false
constructor(private _AuthService:AuthService , private _Router:Router){}
registerForm:FormGroup = new FormGroup({
  name: new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
  email: new FormControl('',[Validators.required , Validators.email ]),
  password: new FormControl('',[Validators.required , Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/) ]),
  rePassword: new FormControl(''),
  phone: new FormControl('',[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
},{validators:[this.RePassWordMatch] } as FormControlOptions)

RePassWordMatch(group:FormGroup):void{
  const password = group.get('password')
  const rePassword = group.get('rePassword')
if (rePassword?.value == '' ){
rePassword.setErrors({required:true})
}else if (password?.value !== rePassword?.value){
rePassword?.setErrors({mismatch:true})
}
}
handelingRegister(){
  this.spinRegisterBtn = true ,
  
  this._AuthService.registerApiCall(this.registerForm.value).subscribe({
    next:(response)=>{
      if (this.registerForm.valid){
        this.spinRegisterBtn = false ;
        this._Router.navigate(['login']);  
      }
    },
    error:(err)=>{
      this.spinRegisterBtn = false ;

    },
    complete:()=>{
      this.spinRegisterBtn = false ;

    }
  })  
}
}
