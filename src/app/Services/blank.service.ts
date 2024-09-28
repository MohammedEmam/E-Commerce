import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BlankService implements OnInit {
  BaseUrl:string = "https://ecommerce.routemisr.com"
  wishBadge:BehaviorSubject<any> = new BehaviorSubject('')
  wishHeart:BehaviorSubject<string[]> = new BehaviorSubject([''])
  wishIdList:string[] = []

  constructor(private _HttpClient:HttpClient) { }
  ngOnInit(): void {
    // this.wishHeart.subscribe({
    //   next:(data)=>{
    // this.wishIdList = data
    //   }
    // })
  }
  // 

  productsApiCall(page:any=1):Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/products?limit=20&page=${page}`)
  }

  GetAllProducts():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/products`)
  }

  GetAllCategories():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/categories`)
  }

  GetAllBrands():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/brands`)
  }

  productDetailsApiCall(id:any):Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/products/${id}`)
  }

  categoriesApiOnHome():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/categories`)
  }

  AddProductToWishlist (id:string):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/wishlist` , {productId:id})
  }

  UserWishlist ():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/wishlist`)
  }

  RemoveProducFromUserWishlist (id:string):Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}/api/v1/wishlist/${id}`)
  }


}
