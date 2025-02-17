import { pgTable, serial, varchar, text, integer, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { accounts } from './user';

export const categories = pgTable('categories', {
  categoryId: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).unique().notNull(),
  description: text('description'),
});

export const posts = pgTable('posts', {
  postId: serial().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
  excerpt: text(),
  publishedAt: timestamp(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
  categoryId: integer().references(() => categories.categoryId),
  authorId: integer().references(() => accounts.userId).notNull(),
});

export const tags = pgTable('tags', {
  tagId: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
});

export const postTags = pgTable('post_tags', {
  postId: integer()
    .notNull()
    .references(() => posts.postId),
  tagId: integer()
    .notNull()
    .references(() => tags.tagId),
}, (table) => [
  primaryKey({ columns: [table.postId, table.tagId] }),
]);
