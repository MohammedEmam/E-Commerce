import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlankService } from 'src/app/Services/blank.service';
import { CartService } from 'src/app/Services/cart.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { SpinnerServiceService } from 'src/app/Services/spinner-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  term:string=''
  products:any=[];
  categories:any=[];
  nextPage:any = ''
  prevPage:any = ''
  wishListArray:any[] = []

constructor(public _BlankService:BlankService , private _CartService:CartService , private _Router:Router , private _Renderer2:Renderer2 , private toastr: ToastrService , private _SpinnerServiceService:SpinnerServiceService){}
  
ngOnInit(): void {
    // this._SpinnerServiceService.show()
    this._BlankService.UserWishlist().subscribe({
      
      next:(response)=>{
        
        for (const iterator of response.data) {
          this._BlankService.wishIdList.push(iterator._id)
          this.wishListArray.push(iterator._id)
        }

        console.log(response);
        
      }
    })
    this._BlankService.productsApiCall().subscribe({
      next:(response)=>{
        this.products = response.data ;
        this.nextPage = response.nextPage ;
        this.prevPage = response.prevPage ;
        // this._SpinnerServiceService.hide()
        this._SpinnerServiceService.visibility.subscribe({
          next:(data)=>{
            this._SpinnerServiceService.spinner = data

          }
        })

      },
      error:(err)=>{
        // this._SpinnerServiceService.hide()
        console.log(err);
      }
    })
    this._BlankService.categoriesApiOnHome().subscribe({
      next:(response)=>{
        this.categories = response.data ;
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
            this._BlankService.wishBadge.next(response.data.length)
            this._BlankService.wishHeart.next(response.data)
            this._BlankService.wishHeart.subscribe({
              next:(data)=>{
                this._BlankService.wishIdList = data
              }
            })
  
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
PageProducts(id:any){
  this._BlankService.productsApiCall(id).subscribe({
    next:(response)=>{
      this.products = response.data ;
      this.prevPage = response.prevPage ;
      this.nextPage = response.nextPage ;
      console.log(response.prevPage);
      console.log(response.nextPage);
      

    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  static: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

}
