import * as React from 'react';
import {
    useFormContext,
    FormProvider,
    useForm,
    UseFormReturn,
} from 'react-hook-form';

const Login: React.VFC = () => {
    return <div></div>;
};

const LoginForm = () => {
    const form = useForm<LoginCredentials>();
    return (
        <FormProvider {...form}>
            <LoginFormView />
        </FormProvider>
    );
};

type LoginCredentials = {
    username: string;
    password: string;
};

const useLoginFormContext = (): UseFormReturn<LoginCredentials, any> =>
    useFormContext<LoginCredentials>();

const LoginFormView = () => {
    const formContext = useLoginFormContext();

    return <div></div>;
};

export default Login;
