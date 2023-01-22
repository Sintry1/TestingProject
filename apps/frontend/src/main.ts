import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IAccessInfo, LocalStorageVars } from '@omnihost/interfaces';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Sentry.init({
  dsn: environment.sentryDsn,
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: [/(localhost:3333)|(api\.)/], // requests made to api. or localhost:3333 urls
    }),
  ],
  tracesSampleRate: 1.0,
  tunnel: environment.sentryTunnel,
});

// Set the user information in Sentry so it gets included in the logs
Sentry.configureScope((scope) => {
  let accessInfo: string | IAccessInfo | null = localStorage.getItem(LocalStorageVars.accessInfo);
  if (accessInfo) {
    accessInfo = <IAccessInfo>JSON.parse(accessInfo);
  } else {
    accessInfo = null;
  }
  scope.setUser(
    accessInfo
      ? {
          userId: accessInfo.user.userId,
          accessToken: accessInfo.accessToken,
        }
      : null
  );
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
