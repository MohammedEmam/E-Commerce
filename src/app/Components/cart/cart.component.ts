import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userDataCart: any = {}
  constructor(private _CartService: CartService , private _Renderer2:Renderer2) { }
  ngOnInit(): void {
    this._CartService.getLoggedusercart().subscribe({
      next: (response) => {
        this.userDataCart = response
        this._CartService.cartBadge.next(response.numOfCartItems)


      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
  removeItem(id:string){
    this._CartService.removeSpecificCartItem(id).subscribe({
      next: (response) => {
        this.userDataCart = response
        this._CartService.cartBadge.next(response.numOfCartItems)
        console.log(response);
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })

  }

  updateCartProductQuantity(id:string , count:any , el1:HTMLButtonElement , el2:HTMLButtonElement){
    if (count > 0){
      this._Renderer2.setAttribute(el1 , 'disabled' , 'true')
      this._Renderer2.setAttribute(el2 , 'disabled' , 'true')
      this._CartService.updateCartProductQuantity(id , count).subscribe({
        next:(response)=>{
          this._Renderer2.removeAttribute(el1 , 'disabled')
          this._Renderer2.removeAttribute(el2 , 'disabled')

          this.userDataCart = response
          console.log(response);
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(el1 , 'disabled')
          this._Renderer2.removeAttribute(el2 , 'disabled')

          console.log(err);
          
        }
      })
  
    }
  }
  ClearUserCart(){
    this._CartService.ClearUserCart().subscribe({
      next:(response)=>{
        this._CartService.cartBadge.next(response.numOfCartItems)
        this.userDataCart = response

        console.log(response);
        
      }
    })
  }
}
