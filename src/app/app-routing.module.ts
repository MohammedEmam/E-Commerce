import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { BlankLayoutComponent } from './LayOuts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './LayOuts/auth-layout/auth-layout.component';
import { authGuard } from './Guards/auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ForgotPasswordsComponent } from './Components/forgot-passwords/forgot-passwords.component';
import { VerifyResetCodeComponent } from './Components/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

const routes: Routes = [
  {path:'' , component:BlankLayoutComponent , children:[
    {path:'' , redirectTo:'home' ,pathMatch:'full' , title:"Home"},
    {path:'home' , component:HomeComponent ,canActivate: [authGuard] , title:"Home"},
    {path:'Productdetails/:id' , component:ProductDetailsComponent ,canActivate: [authGuard] , title:"Product Details"},
    {path:'cart' , component:CartComponent ,canActivate: [authGuard] , title:"Cart"},
    {path:'brands' , component:BrandsComponent ,canActivate: [authGuard] , title:'Brands'},
    {path:'products' , component:ProductsComponent ,canActivate: [authGuard] , title:'Products'},
    {path:'categories' , component:CategoriesComponent ,canActivate: [authGuard] , title:'Categories'},
    {path:'payment/:id' , component:PaymentComponent , canActivate: [authGuard] , title:'Payment'},
    {path:'allorders' , component:AllordersComponent , canActivate: [authGuard] , title:'allorders'},
    {path:'wishlist' , component:WishlistComponent , canActivate: [authGuard] , title:'wishlist'}
  ]},
  {path:'' , component:AuthLayoutComponent , children:[
    {path:'login' , component:LoginComponent , title:'Login'},
    {path:'register' , component:RegisterComponent , title:'Register'},
    {path:'forgotPasswords' , component:ForgotPasswordsComponent , title:'forgotPasswords'},
    {path:'verifyResetCode' , component:VerifyResetCodeComponent , title:'verifyResetCode'},
    {path:'resetPassword' , component:ResetPasswordComponent , title:'resetPassword'},
  ]},
  // {path:'' , redirectTo:'register' ,pathMatch:'full', title:'Register'},
  {path:'**' , component:NotfoundComponent , title:'Notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
