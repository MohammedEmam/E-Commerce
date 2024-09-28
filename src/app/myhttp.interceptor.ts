import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { SpinnerServiceService } from './Services/spinner-service.service';

@Injectable()
export class MyhttpInterceptor implements HttpInterceptor {
  constructor(    private _loading: SpinnerServiceService
    ) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('_token')!=null){
      const mytoken:any = localStorage.getItem('_token')
      request = request.clone({
        setHeaders:{token:mytoken}
      })
    }
    return next.handle(request)

  }

  

}
