import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  cartId:any = ''
constructor(private _CartService:CartService , private _FormBuilder:FormBuilder , private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.cartId = params.get("id")
      }
    })
  }
paymentForm : FormGroup = this._FormBuilder.group({
  details:['',[Validators.required , Validators.minLength(5)]],
  phone:['',[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],
  city:['',[Validators.required , Validators.minLength(2)]],
})

CheckOut (){
  this._CartService.CheckOut(this.cartId , this.paymentForm.value).subscribe({
    next:(response)=>{
      window.open(response.session.url,'_self')
      console.log(response);
      

    }
  })
  
  
}
}
