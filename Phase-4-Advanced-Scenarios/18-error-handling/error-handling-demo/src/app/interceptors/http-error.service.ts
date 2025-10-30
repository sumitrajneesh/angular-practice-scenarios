import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorLoggingService } from '../services/error-logging.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private logger: ErrorLoggingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = '';
        if (error.status === 0) {
          message = 'Network error. Please check your connection.';
        } else {
          message = `Error ${error.status}: ${error.message}`;
        }
        this.logger.logError(error);
        alert(message);
        return throwError(error);
      })
    );
  }
}
