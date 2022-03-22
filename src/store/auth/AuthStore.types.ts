type Initialize = () => Promise<void>;

type LoginFunction = (
    email: string,
    password: string,
    remember: boolean,
) => Promise<void>;

type LogoutFunction = () => void;

type AuthUser = Record<string, unknown> | null;

export type AuthStoreType = {
    user: AuthUser;
    isInitialized: boolean;
    isAuthenticated: boolean;
    login: LoginFunction;
    logout: LogoutFunction;
    initialize: Initialize;
};
