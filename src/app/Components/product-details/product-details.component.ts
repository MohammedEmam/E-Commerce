import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { BlankService } from 'src/app/Services/blank.service';
import { CartService } from 'src/app/Services/cart.service';
import { SpinnerServiceService } from 'src/app/Services/spinner-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:any = ''
  productDetails:any = {}
constructor(private _ActivatedRoute:ActivatedRoute , private _CartService:CartService , private _BlankService:BlankService , private toastr:ToastrService ){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.id = param.get('id');
      }
    })
    
    this._BlankService.productDetailsApiCall(this.id).subscribe({
      next:(response)=>{
        this.productDetails = response
        
      },
      error:(err)=>{
        console.log(err);
        

      }
    })
  }
  
  addToCart (id:string){
    this._CartService.addProductToCart(id).subscribe({
      next:(response)=>{
        this.toastr.success(`${response.status}`, `${response.message}`);

        this._CartService.cartBadge.next(response.numOfCartItems)

        console.log(response);
        
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
    },
    nav: true
  }

}
