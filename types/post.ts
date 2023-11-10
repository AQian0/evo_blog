import type { Json } from './supabase';

export interface Post {
  id: number;
  title: Json;
  content: Json;
  time: string;
}
