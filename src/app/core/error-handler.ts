import { Injectable, Provider } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err => {
            this.router.navigate(['/error'], { queryParams: { error: err.message } })
            return throwError(err);
        }))
    }
}

export const errorInterceptor: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: ErrorHandlerInterceptor
}
