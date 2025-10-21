export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          activity_type: string
          created_at: string | null
          details: Json | null
          id: string
          ip_address: string | null
          page: string | null
          session_id: string | null
          user_agent: string | null
          user_info: Json
        }
        Insert: {
          activity_type: string
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: string | null
          page?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_info: Json
        }
        Update: {
          activity_type?: string
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: string | null
          page?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_info?: Json
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string | null
          id: string
          password_hash: string
          username: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          password_hash: string
          username: string
        }
        Update: {
          created_at?: string | null
          id?: string
          password_hash?: string
          username?: string
        }
        Relationships: []
      }
      complaints: {
        Row: {
          admin_notes: string | null
          attachments: Json | null
          complaint_type: Database["public"]["Enums"]["complaint_type"]
          created_at: string
          department: string | null
          description: string
          evidence_url: string | null
          id: string
          is_anonymous: boolean
          location: string | null
          priority: Database["public"]["Enums"]["priority_level"]
          rejection_reason: string | null
          reporter_contact: string | null
          reporter_name: string | null
          status: Database["public"]["Enums"]["complaint_status"]
          submission_ip: string | null
          submitted_by: string | null
          telegram_sent: boolean | null
          title: string
          tracking_id: string
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          attachments?: Json | null
          complaint_type: Database["public"]["Enums"]["complaint_type"]
          created_at?: string
          department?: string | null
          description: string
          evidence_url?: string | null
          id?: string
          is_anonymous?: boolean
          location?: string | null
          priority?: Database["public"]["Enums"]["priority_level"]
          rejection_reason?: string | null
          reporter_contact?: string | null
          reporter_name?: string | null
          status?: Database["public"]["Enums"]["complaint_status"]
          submission_ip?: string | null
          submitted_by?: string | null
          telegram_sent?: boolean | null
          title: string
          tracking_id?: string
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          attachments?: Json | null
          complaint_type?: Database["public"]["Enums"]["complaint_type"]
          created_at?: string
          department?: string | null
          description?: string
          evidence_url?: string | null
          id?: string
          is_anonymous?: boolean
          location?: string | null
          priority?: Database["public"]["Enums"]["priority_level"]
          rejection_reason?: string | null
          reporter_contact?: string | null
          reporter_name?: string | null
          status?: Database["public"]["Enums"]["complaint_status"]
          submission_ip?: string | null
          submitted_by?: string | null
          telegram_sent?: boolean | null
          title?: string
          tracking_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      credits_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          id: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          credits: number
          email: string
          id: string
          is_admin: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          credits?: number
          email: string
          id: string
          is_admin?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          credits?: number
          email?: string
          id?: string
          is_admin?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      screenshots: {
        Row: {
          created_at: string
          id: string
          original_url: string
          processed_url: string | null
          project_id: string | null
          settings: Json
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          original_url: string
          processed_url?: string | null
          project_id?: string | null
          settings?: Json
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          original_url?: string
          processed_url?: string | null
          project_id?: string | null
          settings?: Json
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "screenshots_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      secret_codes: {
        Row: {
          code: string
          created_at: string | null
          id: string
          is_current: boolean | null
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: string
          is_current?: boolean | null
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: string
          is_current?: boolean | null
        }
        Relationships: []
      }
      style_presets: {
        Row: {
          created_at: string
          id: string
          name: string
          settings: Json
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          settings: Json
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          settings?: Json
          user_id?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_id: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          card_id: string
          created_at: string
          currency: string
          id: string
          merchant_name: string
          status: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          card_id: string
          created_at?: string
          currency?: string
          id?: string
          merchant_name: string
          status?: string
          transaction_type?: string
          user_id: string
        }
        Update: {
          amount?: number
          card_id?: string
          created_at?: string
          currency?: string
          id?: string
          merchant_name?: string
          status?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_card_id_fkey"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "virtual_cards"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          created_at: string
          date_of_birth: string | null
          full_name: string
          id: string
          mobile_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date_of_birth?: string | null
          full_name: string
          id?: string
          mobile_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date_of_birth?: string | null
          full_name?: string
          id?: string
          mobile_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          created_at: string
          id: string
          prompt: string
          status: string
          thumbnail_url: string | null
          updated_at: string
          user_id: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          prompt: string
          status?: string
          thumbnail_url?: string | null
          updated_at?: string
          user_id: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          prompt?: string
          status?: string
          thumbnail_url?: string | null
          updated_at?: string
          user_id?: string
          video_url?: string | null
        }
        Relationships: []
      }
      virtual_cards: {
        Row: {
          balance: number
          card_number: string
          card_type: string
          created_at: string
          cvv: string
          expiry_date: string
          id: string
          pin_hash: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          balance?: number
          card_number: string
          card_type?: string
          created_at?: string
          cvv: string
          expiry_date: string
          id?: string
          pin_hash?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          balance?: number
          card_number?: string
          card_type?: string
          created_at?: string
          cvv?: string
          expiry_date?: string
          id?: string
          pin_hash?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      update_current_code: {
        Args: { new_code: string }
        Returns: undefined
      }
    }
    Enums: {
      complaint_status:
        | "pending"
        | "under_review"
        | "investigating"
        | "resolved"
        | "rejected"
      complaint_type: "ঘুষ" | "ক্ষমতার অপব্যবহার" | "অনিয়ম" | "অন্যান্য"
      priority_level: "High" | "Medium" | "Low"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      complaint_status: [
        "pending",
        "under_review",
        "investigating",
        "resolved",
        "rejected",
      ],
      complaint_type: ["ঘুষ", "ক্ষমতার অপব্যবহার", "অনিয়ম", "অন্যান্য"],
      priority_level: ["High", "Medium", "Low"],
    },
  },
} as const
