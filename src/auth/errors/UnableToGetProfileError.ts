import { AuthError } from "./AuthError";

export class UnableToGetProfileError extends AuthError {
    constructor(message?: string, cause?: any) {
        super(message, cause);
    }
}
