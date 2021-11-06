import {
    FieldValues,
    UseFormReturn,
    UseFormHandleSubmit,
} from 'react-hook-form';
import React from 'react';

type LoginFormFieldValues = {};

export type LoginFormViewProps = {
    onSubmit: (
        e?: React.BaseSyntheticEvent<object, any, any> | undefined,
    ) => Promise<void>;
};
