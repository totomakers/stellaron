import type { Config } from 'drizzle-kit';
import { config } from 'dotenv';

config();

export default {
  schema: './**/*.schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString:
      process.env.DB_CLIENT_URL || '<DB_CLIENT_URL MISSING ENV>',
  },
} satisfies Config;
