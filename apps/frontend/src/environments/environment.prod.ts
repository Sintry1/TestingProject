import { IEnvironment } from './environment.interface';

// production-specific environment
export const environment: IEnvironment = {
  production: true,

  environment: window['env'] ? window['env']['environment'] : 'DEVELOPMENT',
  sentryDsn: window['env'] ? window['env']['sentryDsn'] : '',
  sentryTunnel: window['env'] ? window['env']['sentryTunnel'] : '',
  apiUrl: window['env'] ? window['env']['apiUrl'] : 'http://localhost:3333',
};
