import * as React from 'react';
import { Outlet } from 'react-router';

export const AuthLayout: React.FC = ({ children }) => {
    return (
        <div>
            layout
            <div>{children}</div>
        </div>
    );
};
