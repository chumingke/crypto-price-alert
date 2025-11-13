// lib/supabase.ts - 这是"通信中心"
import { createClient } from '@supabase/supabase-js'

// 从环境变量读取"总部地址和通行证"
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 创建标准的"通信设备"
export const supabase = createClient(supabaseUrl, supabaseAnonKey)