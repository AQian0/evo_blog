import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';

export const useDrizzle = () => drizzle({
  connection: process.env.DATABASE_URL!,
  casing: 'snake_case',
});
