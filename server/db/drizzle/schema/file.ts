import { pgTable, serial, varchar, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { users } from './user';

export const media = pgTable('media', {
  mediaId: serial('media_id').primaryKey(),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  filePath: varchar('file_name', { length: 255 }).notNull(),
  fileType: varchar('file_type', { length: 50 }),
  uploaderId: integer('uploader_id')
    .references(() => users.userId)
    .notNull(),
  uploadedAt: timestamp('uploaded_at').defaultNow(),
  description: text(),
});
