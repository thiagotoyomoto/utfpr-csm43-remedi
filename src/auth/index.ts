import { SupabaseAdapter } from "./services/adapters";
import { Auth } from "./services/contracts";

export const auth: Auth = new SupabaseAdapter();
