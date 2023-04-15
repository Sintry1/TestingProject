import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  Announcement,
  Assignment,
  Bike,
  Blacklist,
  Car,
  Document,
  Luggage,
  ResetPasswordToken,
  Task,
  Token,
  User,
} from '@omnihost/models';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing: boolean): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      synchronize: true,
      name: 'default',

      host: this.getValue('API_POSTGRES_HOST', false) || 'localhost',
      port: parseInt(this.getValue('API_POSTGRES_PORT', false)) || 5432,
      username: this.getValue('API_POSTGRES_USER', false) || 'root',
      password: this.getValue('API_POSTGRES_PASSWORD', false) || 'root',
      database: this.getValue('API_POSTGRES_DATABASE', false) || 'omnihost',
      dropSchema: true,

      entities: [
        User,
        ResetPasswordToken,
        Token,
        Luggage,
        Car,
        Task,
        Assignment,
        Document,
        Bike,
        Announcement,
        Blacklist,
      ],
    };
  }
}

// commented out so the app uses defaults for DB connection instead
const configService = new ConfigService(process.env).ensureValues([
  //   'POSTGRES_HOST',
  //   'POSTGRES_PORT',
  //   'POSTGRES_USER',
  //   'POSTGRES_PASSWORD',
  //   'POSTGRES_DATABASE',
]);

export { configService };
