import { supabase } from "@/lib/supabase";

import { Auth } from "@/auth/services/contracts";
import { Credentials } from "@/auth/domain";
import { InvalidCredentialsError, NotPossibleToSignOutError, UnableToGetProfileError, UnableToGetUserError } from "@/auth/errors";

import { Profile, User } from "@/domain";

export class SupabaseAdapter implements Auth {
    public async signIn(credentials: Credentials): Promise<User> {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password
        });

        if(error) {
            throw new InvalidCredentialsError();
        }

        return {
            id: data.user.id,
            email: data.user.email
        }
    }

    public async signOut(): Promise<void> {
        const { error } = await supabase.auth.signOut();

        if(error) {
            throw new NotPossibleToSignOutError();
        }
    }

    public async getUser(): Promise<User> {
        const { data, error } = await supabase.auth.getSession();

        if(error) {
            throw new UnableToGetUserError();
        }

        const user = data.session.user;

        return {
            id: user.id,
            email: user.email
        }
    }

    public async getProfile(): Promise<Profile> {
        const { data, error } = await supabase.from('profile').select('id,name,birthdate,gender,created_at,updated_at,deleted_at');

        if(error) {
            throw new UnableToGetProfileError();
        }

        if(data.length === 0) {
            throw new UnableToGetProfileError();
        }
    
        return {
            id: data[0].id,
            name: data[0].name,
            birthdate: data[0].birthdate,
            gender: data[0].gender
        }
    }

    private 
}
