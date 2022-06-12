import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('Token')
   
    if(token!==null) {
      const tokencurren =JSON.parse(token);
      // Clone the request and set the new header in one step.
      request = request.clone({ setHeaders: { Authorization:  `Bearer ${tokencurren}` } });
    }
   
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
          if(error.status===401){
            this.toastr.error("logearse nuevamente!","Sesion Expirada");
            this.router.navigate(['/inicio/login']);
          }
          return throwError(error);
      })
    );
  }
}
