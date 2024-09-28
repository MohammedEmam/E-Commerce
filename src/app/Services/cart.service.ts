import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartBadge:BehaviorSubject<number> = new BehaviorSubject(0)
  BaseUrl:string = 'https://ecommerce.routemisr.com'
  constructor(private _HttpClient:HttpClient) { }

  addProductToCart(priductId:string):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/cart` ,
    {"productId": priductId}
    )
  }
  
  getLoggedusercart():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/cart` 
    )
  }

  removeSpecificCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}/api/v1/cart/${id}` 
    )
  }

  updateCartProductQuantity(id:string , count:string|number):Observable<any>{
    return this._HttpClient.put(`${this.BaseUrl}/api/v1/cart/${id}`,{count:count} 
    )
  }

  CheckOut(id:string , shippingAddress:{}|number):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{shippingAddress:shippingAddress} 
    )
  }

  AllOrders():Observable<any> {
    return this._HttpClient.get(`${this.BaseUrl}/api/v1/orders/`)
  }

  ClearUserCart ():Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}/api/v1/cart/`)
  }
}
