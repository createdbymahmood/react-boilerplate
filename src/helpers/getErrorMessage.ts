import { isString, isObject, get, isArray, toString } from 'lodash';

export const getErrorMessage = (error: any) => {
    if (isString(error?.error)) return toString(error.error);
    if (isObject(error?.error)) return get(error.error, 'message');
    if (isArray(error.message)) return error.message.join(', ');
    if (isObject(error)) return get(error, 'message');
    if (isString(error)) return error;
    return `Something went wrong!`;
};
