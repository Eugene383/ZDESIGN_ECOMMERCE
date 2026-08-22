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
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      clients: {
        Row: {
          account_status: string | null
          address: string | null
          avatar_url: string | null
          clients_type: string
          created_at: string | null
          email: string
          id: string
          name: string
          password: string
          phone: string
        }
        Insert: {
          account_status?: string | null
          address?: string | null
          avatar_url?: string | null
          clients_type: string
          created_at?: string | null
          email: string
          id?: string
          name: string
          password: string
          phone: string
        }
        Update: {
          account_status?: string | null
          address?: string | null
          avatar_url?: string | null
          clients_type?: string
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          password?: string
          phone?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          customer_id: string | null
          delivery_address: string | null
          id: string
          order_date: string | null
          status: string | null
        }
        Insert: {
          customer_id?: string | null
          delivery_address?: string | null
          id?: string
          order_date?: string | null
          status?: string | null
        }
        Update: {
          customer_id?: string | null
          delivery_address?: string | null
          id?: string
          order_date?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          id: string
          paid_at: string | null
          payment_method: string
          payment_status: string | null
          receipt_url: string | null
          sale_id: string | null
        }
        Insert: {
          id?: string
          paid_at?: string | null
          payment_method: string
          payment_status?: string | null
          receipt_url?: string | null
          sale_id?: string | null
        }
        Update: {
          id?: string
          paid_at?: string | null
          payment_method?: string
          payment_status?: string | null
          receipt_url?: string | null
          sale_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
        ]
      }
      product_attributes: {
        Row: {
          attribute_name: string
          attribute_value: string
          id: string
          product_id: string | null
        }
        Insert: {
          attribute_name: string
          attribute_value: string
          id?: string
          product_id?: string | null
        }
        Update: {
          attribute_name?: string
          attribute_value?: string
          id?: string
          product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_attributes_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_images: {
        Row: {
          id: string
          image_url: string
          is_primary: boolean | null
          product_id: string | null
        }
        Insert: {
          id?: string
          image_url: string
          is_primary?: boolean | null
          product_id?: string | null
        }
        Update: {
          id?: string
          image_url?: string
          is_primary?: boolean | null
          product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_variants: {
        Row: {
          color: string | null
          id: string
          price: number | null
          product_id: string | null
          size: string | null
          sku: string | null
          stock: number | null
        }
        Insert: {
          color?: string | null
          id?: string
          price?: number | null
          product_id?: string | null
          size?: string | null
          sku?: string | null
          stock?: number | null
        }
        Update: {
          color?: string | null
          id?: string
          price?: number | null
          product_id?: string | null
          size?: string | null
          sku?: string | null
          stock?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          price: number
          stock: number | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          price: number
          stock?: number | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          price?: number
          stock?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          access_level: string | null
          bairro: string | null
          created_at: string | null
          id: string
          municipio: string | null
          name: string | null
          onboarding_completed: boolean | null
          phone: string | null
          role: string | null
          rua: string | null
        }
        Insert: {
          access_level?: string | null
          bairro?: string | null
          created_at?: string | null
          id?: string
          municipio?: string | null
          name?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          role?: string | null
          rua?: string | null
        }
        Update: {
          access_level?: string | null
          bairro?: string | null
          created_at?: string | null
          id?: string
          municipio?: string | null
          name?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          role?: string | null
          rua?: string | null
        }
        Relationships: []
      }
      reservations: {
        Row: {
          id: string
          order_id: string | null
          reserved_at: string | null
          status: string | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          reserved_at?: string | null
          status?: string | null
        }
        Update: {
          id?: string
          order_id?: string | null
          reserved_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservations_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      sale_items: {
        Row: {
          id: string
          product_id: string | null
          quantity: number
          sale_id: string | null
          subtotal: number
        }
        Insert: {
          id?: string
          product_id?: string | null
          quantity: number
          sale_id?: string | null
          subtotal: number
        }
        Update: {
          id?: string
          product_id?: string | null
          quantity?: number
          sale_id?: string | null
          subtotal?: number
        }
        Relationships: [
          {
            foreignKeyName: "sale_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sale_items_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
        ]
      }
      sales: {
        Row: {
          customer_id: string | null
          id: string
          payment_status: string | null
          sale_date: string | null
          total: number | null
        }
        Insert: {
          customer_id?: string | null
          id?: string
          payment_status?: string | null
          sale_date?: string | null
          total?: number | null
        }
        Update: {
          customer_id?: string | null
          id?: string
          payment_status?: string | null
          sale_date?: string | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      service_requests: {
        Row: {
          created_at: string | null
          custom_description: string | null
          customer_id: string | null
          id: string
          reference_image_url: string | null
          service_id: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          custom_description?: string | null
          customer_id?: string | null
          id?: string
          reference_image_url?: string | null
          service_id?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          custom_description?: string | null
          customer_id?: string | null
          id?: string
          reference_image_url?: string | null
          service_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_requests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_requests_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          base_price: number | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          name: string
        }
        Insert: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name: string
        }
        Update: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name?: string
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
      [_ in never]: never
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
    Enums: {},
  },
} as const

export type Category =
  Database["public"]["Tables"]["categories"]["Row"]

export type Client =
  Database["public"]["Tables"]["clients"]["Row"]

export type Order =
  Database["public"]["Tables"]["orders"]["Row"]

export type Payment =
  Database["public"]["Tables"]["payments"]["Row"]

export type Product =
  Database["public"]["Tables"]["products"]["Row"]

export type Profile =
  Database["public"]["Tables"]["profiles"]["Row"]

export type Reservation =
  Database["public"]["Tables"]["reservations"]["Row"]

export type SaleItem =
  Database["public"]["Tables"]["sale_items"]["Row"]

export type Sale =
  Database["public"]["Tables"]["sales"]["Row"]

export type ServiceRequest =
  Database["public"]["Tables"]["service_requests"]["Row"]

export type Service =
  Database["public"]["Tables"]["services"]["Row"]

export type Product_images = 
  Database["public"]["Tables"]["product_images"]["Row"]

export type Product_attributes = 
  Database["public"]["Tables"]["product_attributes"]["Row"]

export type Product_variants = 
  Database["public"]["Tables"]["product_variants"]["Row"]
