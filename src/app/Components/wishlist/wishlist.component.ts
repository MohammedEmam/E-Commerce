import { Component, OnInit } from '@angular/core';
import { BlankService } from 'src/app/Services/blank.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishList:any = ''
constructor(private _BlankService:BlankService , private _CartService:CartService){}
  ngOnInit(): void {
      this._BlankService.UserWishlist().subscribe({
        next:(response)=>{
          this.wishList = response
          this._BlankService.wishBadge.next(response.count)

        },
        error:(err)=>{
          console.log(err);
          
        }
      })
  }
  RemoveProducFromUserWishlist(id:string){
    this._BlankService.RemoveProducFromUserWishlist(id).subscribe({
      next:(response)=>{
        this._BlankService.UserWishlist().subscribe({
          next:(response)=>{
            this.wishList = response
            this._BlankService.wishBadge.next(response.data.length)

  
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
  
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  AddToCart(id:string){
    this._CartService.addProductToCart(id).subscribe({
      next:(response)=>{
        this._CartService.cartBadge.next(response.numOfCartItems)
        this.RemoveProducFromUserWishlist(id)
        console.log(response);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
