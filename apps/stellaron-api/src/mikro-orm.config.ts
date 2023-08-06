import { defineConfig } from '@mikro-orm/postgresql';

import 'dotenv/config';

const config = defineConfig({
  clientUrl: process.env.MIKRO_ORM_CLIENT_URL,
  entities: ['./dist/db/entities'],
  entitiesTs: ['./src/db/entities'],
  driverOptions: {
    ssl: 'require',
  },
});

export default config;
