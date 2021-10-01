export type AuthStoreType = {
    user: AuthUser;
    isInitialized: boolean;
    isAuthenticated: boolean;
    login: (
        email: string,
        password: string,
        remember: boolean,
    ) => Promise<void>;
    logout: () => void;
    initialize: () => Promise<void>;
};

type AuthUser = Record<string, unknown> | null;
