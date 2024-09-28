import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NavbarBlankComponent } from './Components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './Components/navbar-auth/navbar-auth.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/cart/cart.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { BlankLayoutComponent } from './LayOuts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './LayOuts/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CuttextPipe } from './Pipe/cuttext.pipe';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentComponent } from './Components/payment/payment.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { SearchHomePipe } from './Pipe/search-home.pipe';
import { ForgotPasswordsComponent } from './Components/forgot-passwords/forgot-passwords.component';
import { VerifyResetCodeComponent } from './Components/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SpinnerInterceptor } from './spinner.interceptor';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    NotfoundComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    CuttextPipe,
    ProductDetailsComponent,
    PaymentComponent,
    AllordersComponent,
    WishlistComponent,
    SearchHomePipe,
    ForgotPasswordsComponent,
    VerifyResetCodeComponent,
    ResetPasswordComponent,
    SpinnerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),



  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyhttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
