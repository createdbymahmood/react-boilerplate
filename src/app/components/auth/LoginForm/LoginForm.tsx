import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LoginFormView } from './LoginFormView';
import { LoginFormFieldValues } from './LoginForm.d';

export const LoginForm: FC = () => {
    const form = useForm<LoginFormFieldValues>({
        defaultValues: {},
    });

    const onSubmit = form.handleSubmit(data => {
        console.log(data);
    });

    return (
        <FormProvider {...form}>
            <LoginFormView onSubmit={onSubmit} />
        </FormProvider>
    );
};
