export interface IEnvironment {
  production: boolean;
  envName: string;

  sentryDsn: string;
  sentryTunnel: string;
  apiUrl: string;
}
