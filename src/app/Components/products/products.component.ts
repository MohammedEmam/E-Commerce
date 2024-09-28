import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlankService } from 'src/app/Services/blank.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any
  constructor(private _BlankService:BlankService , private _Renderer2:Renderer2 , private _CartService:CartService , private toastr:ToastrService){}
  ngOnInit(): void {
    this._BlankService.GetAllProducts().subscribe({
      next:(response)=>{
        this.products = response.data ;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  
  addToCart (id:string){
    this._CartService.addProductToCart(id).subscribe({
      next:(response)=>{
        if (response.status == 'success'){
            this.toastr.success(`${response.status}`, `${response.message}`);
  
        }

        console.log(response);
        this._CartService.cartBadge.next(response.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  AddProductToWishlist (id:string ){
    if(this._BlankService.wishIdList.includes(id)){
      this._BlankService.RemoveProducFromUserWishlist(id).subscribe({
        next:(response)=>{
          this.toastr.error(`${response.status}`, `${response.message}`);  
          console.log(response);
          this._BlankService.wishBadge.next(response.data.length)
          this._BlankService.wishHeart.next(response.data)
          this._BlankService.wishHeart.subscribe({
            next:(data)=>{
              this._BlankService.wishIdList = data
            }
          })
        }
      })
      console.log('Delete');
      
    }else {
      this._BlankService.AddProductToWishlist(id).subscribe({
        next:(response)=>{
          if (response.status == 'success'){
            this.toastr.success(`${response.status}`, `${response.message}`);  
          }
                  
          this._BlankService.wishBadge.next(response.data.length)
          this._BlankService.wishHeart.next(response.data)
          this._BlankService.wishHeart.subscribe({
            next:(data)=>{
              this._BlankService.wishIdList = data
            }
          })
        }
      })
  
    }
  }


}
