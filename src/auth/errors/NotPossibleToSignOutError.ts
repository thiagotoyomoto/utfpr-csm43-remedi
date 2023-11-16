import { AuthError } from "./AuthError";

export class NotPossibleToSignOutError extends AuthError {
    constructor(message?: string, cause?: any) {
        super(message, cause);
    }
}
