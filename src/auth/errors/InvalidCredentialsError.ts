import { AuthError } from "./AuthError";

export class InvalidCredentialsError extends AuthError {
    constructor(message?: string, cause?: any) {
        super(message, cause);
    }
}
