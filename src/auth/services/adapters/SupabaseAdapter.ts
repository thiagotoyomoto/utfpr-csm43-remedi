import { supabase } from "@/lib/supabase";
import { AuthError, AuthTokenResponse } from "@supabase/supabase-js";

import { Credentials } from "@/auth/domain";

export class SupabaseAdapter {
    public async signIn(credentials: Credentials): Promise<AuthTokenResponse> {
        return supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password
        });
    } 

    public async signOut(): Promise<{
        error: AuthError;
    }> {
        return supabase.auth.signOut();
    }
}
