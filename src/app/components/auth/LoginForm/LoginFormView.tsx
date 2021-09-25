import { FC, useMemo } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import type { LoginFormViewProps } from './LoginForm.d';

const lengthIsMinimumOf = (items: any[], length: number): boolean => {
    return items.length > length;
};

export const LoginFormView: FC<LoginFormViewProps> = () => {
    const { handleSubmit, register, control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: 'username', // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
    });

    const onSubmit = data => {
        console.log({ data });
    };

    const isDeletable = useMemo(
        () => lengthIsMinimumOf(fields, 1),
        [fields.length],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <button type='button' onClick={() => append({ value: '' })}>
                    +
                </button>
            </div>

            {fields.map((field, index) => {
                return (
                    <div
                        key={field.id} // important to include key with field's id
                    >
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
