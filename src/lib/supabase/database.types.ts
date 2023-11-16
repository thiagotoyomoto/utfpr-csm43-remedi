export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      medications: {
        Row: {
          created_at: string
          deleted_at: string | null
          fleatlet_url: string | null
          frequency: number
          id: number
          initial_time: string
          name: string
          stock: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          fleatlet_url?: string | null
          frequency: number
          id?: number
          initial_time: string
          name: string
          stock: number
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          fleatlet_url?: string | null
          frequency?: number
          id?: number
          initial_time?: string
          name?: string
          stock?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profile: {
        Row: {
          birthdate: string
          created_at: string
          deleted_at: string | null
          gender: Database["public"]["Enums"]["gender"]
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          birthdate: string
          created_at?: string
          deleted_at?: string | null
          gender: Database["public"]["Enums"]["gender"]
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          birthdate?: string
          created_at?: string
          deleted_at?: string | null
          gender?: Database["public"]["Enums"]["gender"]
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "male" | "female" | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
