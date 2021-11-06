import { FC, useMemo } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import type { LoginFormViewProps } from './LoginForm.d';

const lengthIsMinimumOf = (items: any[], length: number): boolean => {
    return items.length > length;
};

export const LoginFormView: FC<LoginFormViewProps> = ({ onSubmit }) => {
    const { register, control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'username',
    });

    const isDeletable = useMemo(
        () => lengthIsMinimumOf(fields, 1),
        [fields.length],
    );

    return (
        <form onSubmit={onSubmit}>
            <div>
                <button type='button' onClick={() => append({ value: '' })}>
                    +
                </button>
            </div>

            {fields.map((field, index) => {
                return (
                    <div key={field.id}>
                        <input
                            required
                            className='py-1 border border-gray-400 mb-2'
                            {...register(`username.${index}.value` as const)}
                        />
                        {isDeletable && (
                            <button
                                type='button'
                                className='mx-2'
                                onClick={() => remove(index)}
                            >
                                -
                            </button>
                        )}
                    </div>
                );
            })}

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};
