export interface IEnvironment {
  production: boolean;

  environment: string;
  sentryDsn: string;
  sentryTracingSampleRate: number;
  sentryTunnel: string;
  apiUrl: string;
}
