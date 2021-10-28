import React from 'react';
import { Outlet } from 'react-router';

export const AuthLayout: React.FC = () => {
    return (
        <div>
            <div>layout</div>
            <Outlet />
        </div>
    );
};
