import { Json } from './supabase';

export interface Post {
  id: string;
  title: Json;
  content: Json;
  time: string;
}
