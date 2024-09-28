import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-verify-reset-code',
  templateUrl: './verify-reset-code.component.html',
  styleUrls: ['./verify-reset-code.component.scss']
})
export class VerifyResetCodeComponent {
  spin:boolean = false
  constructor(private _AuthService:AuthService , private _Router:Router){}
codeForm : FormGroup = new FormGroup ({
  resetCode:new FormControl('')
})

  sendResetCode(){
    this.spin = true
this._AuthService.sendResetCode(this.codeForm.value).subscribe({
  next:(response)=>{
    this.spin = false

    console.log(response);
    
    if (response.status == 'Success'){
      this._Router.navigate(['resetPassword']);

    }
  },
  error:(err)=>{
    this.spin = false

  }
})
  }

}
