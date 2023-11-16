import { AuthError } from "./AuthError";

export class UnableToGetUserError extends AuthError {
    constructor(message?: string, cause?: any) {
        super(message, cause);
    }
}
