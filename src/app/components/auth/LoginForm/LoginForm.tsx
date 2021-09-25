import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { createStore, useStateMachine } from 'little-state-machine';
import { useEffectOnce } from 'react-use';

export function updateAction(state, payload) {
    return {
        ...state,
        ...payload,
    };
}

createStore({
    username: [{ value: 'Salam' }],
});

export const LoginForm: FC = ({ children }) => {
    const { state, actions } = useStateMachine({ updateAction });

    const form = useForm({
        defaultValues: state,
    });

    return <FormProvider {...form}>{children}</FormProvider>;
};
