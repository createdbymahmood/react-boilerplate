import React from 'react';
import { useEffectOnce } from 'react-use';
import { useAuthStore } from './AuthStore';

const AuthProvider: React.FC = ({ children }) => {
    const { initialize } = useAuthStore();

    useEffectOnce(() => {
        initialize();
    });

    return <div>{children}</div>;
};
export default AuthProvider;
