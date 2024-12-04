import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mbmczdmhmtctlseiorwy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibWN6ZG1obXRjdGxzZWlvcnd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NjIzNDcsImV4cCI6MjA0ODMzODM0N30.fK_ex-JdDqGe7lqwblGC5WTJO4-JwP7mBXnLgXFtepE'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
    const { user } = useAuthUser()

    user.value = session?.user || null
})

console.log('Init Supabase', supabase)

export default function useSupabase () {
    return { supabase }
}