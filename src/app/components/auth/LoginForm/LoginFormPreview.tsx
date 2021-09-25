import React from 'react';
import { useFormContext } from 'react-hook-form';

export function LoginFormPreview() {
    const form = useFormContext();

    return (
        <div>
            preview
            {/* <pre>{JSON.stringify(fo, null, 2)}</pre> */}
        </div>
    );
}
