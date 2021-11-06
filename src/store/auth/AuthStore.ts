import create from 'zustand';
import { AuthStoreType } from './AuthStore.types';

const login = () => new Promise(res => setTimeout(res, 1000));

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
            isInitialized: true,
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
