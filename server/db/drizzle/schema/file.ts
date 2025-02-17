import { pgTable, serial, varchar, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { accounts } from './user';

export const media = pgTable('media', {
  mediaId: serial().primaryKey(),
  fileName: varchar({ length: 255 }).notNull(),
  filePath: varchar({ length: 255 }).notNull(),
  fileType: varchar({ length: 50 }),
  uploaderId: integer()
    .references(() => accounts.userId)
    .notNull(), uploadedAt: timestamp().defaultNow(),
  description: text(),
});
