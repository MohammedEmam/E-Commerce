import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BlankService } from 'src/app/Services/blank.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {
  cartCount:any
  wishCount:any
  constructor(private _Router:Router , private _CartService:CartService , private _BlankService:BlankService){}
  ngOnInit(): void {
    this._BlankService.UserWishlist().subscribe({
      next:(response)=>{
        this._BlankService.wishBadge.next(response.count)

      },
      error:(err)=>{
        console.log(err);
        
      }
    })

    this._CartService.getLoggedusercart().subscribe({
      next:(response)=>{
        this._CartService.cartBadge.next(response.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

    this._CartService.cartBadge.subscribe({
      next:(data)=>{
        this.cartCount = data
      }
    })

    this._BlankService.wishBadge.subscribe({
      next:(data)=>{
        this.wishCount = data
      }
    })
  }
  
  signOutFunc (){
    localStorage.removeItem("_token")
    this._Router.navigate(["/login"])
  }

}
