import { environment } from '../../environments/environment.prod';

/**
 * Get url of the frontend based on the API environment.\
 * Useful for creating links to be used in emails and redirects.
 * @returns a url.
 */
export function getFrontendUrlFromEnv(): string {
  switch (environment.env) {
    case 'PRODUCTION':
      return 'https://dangleterre.omnihost.app';
    case 'STAGING':
      return 'https://staging.dangleterre-omnihost.app';
    case 'DEMO':
      return 'https://demo.dangleterre-omnihost.app';
    case 'TEST':
      return 'https://test.dangleterre-omnihost.app';
    default:
      return 'http://localhost:4200';
  }
}
