import { Credentials } from "@/auth/domain";
import { Profile, User } from "@/domain";

export interface Auth {
    signIn(credentials: Credentials): Promise<User>;
    signOut(): Promise<void>;
    getUser(): Promise<User>;
    getProfile(): Promise<Profile>;
}
