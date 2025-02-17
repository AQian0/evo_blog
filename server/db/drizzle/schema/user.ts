import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const accounts = pgTable('accounts', {
  userId: serial().primaryKey(),
  username: varchar({ length: 255 }).unique().notNull(),
  passwordHash: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).unique().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
})

export const profiles = pgTable('profiles', {
  userId: serial().primaryKey().references(() => accounts.userId),
  displayName: varchar({ length: 255 }).notNull(),
  avatar: varchar({length: 255}),
  createdAt: timestamp().defaultNow().notNull(),
})

