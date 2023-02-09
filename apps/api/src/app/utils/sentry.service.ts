/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logger } from '@nestjs/common';
import * as Sentry from '@sentry/node';

export class SentryService {
  /**
   * Send an event or error to Sentry.
   * @param type the level of severity.
   * @param name the name the entry should show under in Sentry.
   * @param loggerRef the reference to the logger. If not present, a generic logger will be used.
   * @param object the error or a custom object.
   */
  static async log(
    type: 'error' | 'warning' | 'info',
    name: string,
    loggerRef?: Logger,
    object?: any
  ) {
    Sentry.withScope((scope) => {
      scope.setLevel(type);

      this.logToConsole(type, name, object, loggerRef);

      if (object instanceof Error) {
        // convert the object to be more readable in Sentry
        const modifiedError = new Error(`${object.name}: ${object.message}`);
        modifiedError.name = name;
        modifiedError.stack = object.stack;

        scope.setTransactionName('Sentry Service');

        Sentry.captureException(modifiedError);
      } else {
        Sentry.captureEvent({ message: name, level: type, extra: object });
      }
    });
  }

  /**
   * Print the information to console.
   * @param type the level of severity.
   * @param name the log message.
   * @param object the error or a custom object.
   * @param loggerRef the reference to the logger. If not present, a generic logger will be used.
   */
  private static logToConsole(
    type: 'error' | 'warning' | 'info',
    name: string,
    object?: any,
    loggerRef?: Logger
  ) {
    switch (type) {
      case 'error':
        if (object) {
          loggerRef ? loggerRef.error(name, object) : Logger.error(name, object);
        } else {
          loggerRef ? loggerRef.error(name) : Logger.error(name);
        }
        break;
      case 'warning':
        if (object) {
          loggerRef ? loggerRef.warn(name, object) : Logger.warn(name, object);
        } else {
          loggerRef ? loggerRef.warn(name) : Logger.warn(name);
        }
        break;
      case 'info':
        if (object) {
          loggerRef ? loggerRef.log(name, object) : Logger.log(name, object);
        } else {
          loggerRef ? loggerRef.log(name) : Logger.log(name);
        }
        break;
    }
  }
}
