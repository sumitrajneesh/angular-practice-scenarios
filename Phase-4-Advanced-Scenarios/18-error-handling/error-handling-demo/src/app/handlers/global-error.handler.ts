import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorLoggingService } from '../services/error-logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private logger: ErrorLoggingService, private zone: NgZone) {}

  handleError(error: any): void {
    this.logger.logError(error);
    this.zone.run(() => {
      alert('An unexpected error occurred. Please try again later.');
    });
    console.error('GlobalErrorHandler:', error);
  }
}
