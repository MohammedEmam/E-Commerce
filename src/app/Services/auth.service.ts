import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseUrl:string = "https://ecommerce.routemisr.com"

  constructor(private _HttpClient:HttpClient) { }
  registerApiCall(data:any):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/auth/signup`, data)
  }
  loginApiCall(data:any):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/auth/signin`, data)
  }
  ForgotPassword(data:any):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/auth/forgotPasswords`, data)
  }
  sendResetCode(data:any):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}/api/v1/auth/verifyResetCode`, data)
  }
  ResetPassword(data:any):Observable<any>{
    return this._HttpClient.put(`${this.BaseUrl}/api/v1/auth/resetPassword`, data)
  }
}
