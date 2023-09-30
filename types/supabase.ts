export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      post: {
        Row: {
          content: Json | null;
          createdAt: string;
          id: number;
          title: Json | null;
          type: Json | null;
          updatedAt: string | null;
        };
        Insert: {
          content?: Json | null;
          createdAt?: string;
          id?: number;
          title?: Json | null;
          type?: Json | null;
          updatedAt?: string | null;
        };
        Update: {
          content?: Json | null;
          createdAt?: string;
          id?: number;
          title?: Json | null;
          type?: Json | null;
          updatedAt?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
