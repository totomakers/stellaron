import { pgTable, text } from 'drizzle-orm/pg-core';

export const characters = pgTable('characters', {
  id: text('cuid').primaryKey(),
});
