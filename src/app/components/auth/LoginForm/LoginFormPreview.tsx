import React from 'react';
import { useFormContext } from 'react-hook-form';

export function LoginFormPreview() {
    const form = useFormContext();

    return (
        <div>
            preview
            <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
        </div>
    );
}
