import { FormProvider, useForm } from 'react-hook-form';
import { LoginFormPreview } from './LoginFormPreview';
import { LoginFormView } from './LoginFormView';

export function LoginForm() {
    const form = useForm({
        defaultValues: {
            username: [{ value: 'Salam' }],
        },
    });

    return (
        <FormProvider {...form}>
            <LoginFormPreview />
            <LoginFormView />
        </FormProvider>
    );
}
