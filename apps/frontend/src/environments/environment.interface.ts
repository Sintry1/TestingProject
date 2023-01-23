export interface IEnvironment {
  production: boolean;

  environment: string;
  sentryDsn: string;
  sentryTunnel: string;
  apiUrl: string;
}
