import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorLoggingService {
  logError(error: any) {
    console.error('Logging to server:', error);
    // Simulate sending to monitoring tool like Sentry, Datadog, etc.
  }
}
