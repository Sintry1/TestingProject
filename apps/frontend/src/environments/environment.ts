// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from './environment.interface';

declare const window: { env: IEnvironment };

export const environment: IEnvironment = {
  production: true,
  environment: window.env ? window.env.environment : 'DEVELOPMENT',
  sentryDsn: window.env ? window.env.sentryDsn : '',
  sentryTracingSampleRate: window.env ? window.env.sentryTracingSampleRate : 1.0,
  sentryTunnel: window.env ? window.env.sentryTunnel : '',
  apiUrl: window.env ? window.env.apiUrl : 'http://localhost:3333',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
