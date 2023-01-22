import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';

@Injectable({
  providedIn: 'root',
})
export class SentryService {
  static logEvent(event: { message: string; level: Sentry.SeverityLevel }) {
    Sentry.captureEvent(event);
  }

  static logError(error: unknown) {
    console.error(error);
    if (error instanceof HttpErrorResponse) {
      Sentry.captureEvent({
        message: `${error.url} - ${error.statusText}`,
        level: error.status >= 500 ? 'error' : 'warning',
        extra: { ResponseMessage: error.error.message },
      });
    } else {
      Sentry.captureException(error);
    }
  }
}
