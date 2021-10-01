import create from 'zustand';
import { AuthStoreType } from './AuthStore.types';

import { login } from '@hooks/api';

export const useAuthStore = create<AuthStoreType>(set => ({
    user: null,
    isInitialized: false,
    isAuthenticated: false,
    login: async (email, password, remember) => {
        try {
            await login();
            return set(state => ({
                isInitialized: true,
                isAuthenticated: true,
                user: {
                    email: 'mahmood.bagheri@gmail.com',
                },
            }));
        } catch (error) {
            return set(state => ({
                isInitialized: true,
                isAuthenticated: false,
                user: null,
            }));
        }
    },

    logout: () => {
        return set({
            isAuthenticated: false,
            isInitialized: false,
            user: null,
        });
    },

    initialize: async () => {
        try {
            await login();
            return set(state => ({
                isInitialized: true,
                isAuthenticated: true,
                user: {
                    email: 'mahmood.bagheri@gmail.com',
                },
            }));
        } catch (error) {
            return set(state => ({
                isInitialized: true,
                isAuthenticated: false,
                user: null,
            }));
        }
    },
}));
