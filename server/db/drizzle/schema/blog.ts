import { pgTable, serial, varchar, text, integer, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { users } from './user';

export const categories = pgTable('categories', {
  categoryId: serial('category_id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text('description'),
});

export const posts = pgTable('posts', {
  postId: serial('post_id').primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull().$onUpdate(() => new Date()),
  categoryId: integer('category_id').references(() => categories.categoryId),
  authorId: integer('author_id').references(() => users.userId).notNull(),
});

export const tags = pgTable('tags', {
  tagId: serial('tag_id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
});

export const postTags = pgTable('post_tags', {
  postId: integer('post_id')
    .notNull()
    .references(() => posts.postId),
  tagId: integer('tag_id')
    .notNull()
    .references(() => tags.tagId),
}, (table) => [
  primaryKey({ columns: [table.postId, table.tagId] }),
]);
