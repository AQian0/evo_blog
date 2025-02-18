import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  userId: serial('user_id').primaryKey(),
  username: varchar({ length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  email: varchar({ length: 255 }).unique().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const profiles = pgTable('profiles', {
  userId: serial('user_id').primaryKey().references(() => users.userId),
  displayName: varchar('display_name', { length: 255 }).notNull(),
  avatar: varchar({length: 255}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

