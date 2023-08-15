import { FactoryProvider, Inject, Logger } from '@nestjs/common';
import config from '../../drizzle-config';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

export const DRIZZLE_DB = Symbol('DRIZZLE_DB');

export const dbProvider: FactoryProvider = {
  provide: DRIZZLE_DB,
  useFactory: async () => {
    const logger = new Logger('Drizzle');

    const client = new Client({
      connectionString: config.dbCredentials.connectionString,
    });

    logger.log('Connecting to database...');

    try {
      await client.connect();
    } catch (err) {
      logger.error(err);
    }

    logger.log('Connected to database');

    return drizzle(client);
  },
};

export const InjectDrizzle = () => Inject(DRIZZLE_DB);
