import { ChangeEvent } from 'react';
import { isUndefined, last, negate, pipe, startsWith } from 'lodash/fp';
import { toBase64 } from './toBase64';

export const fileSelector = (
    e: ChangeEvent<HTMLInputElement>,
): Promise<string | ArrayBuffer | null> => {
    return new Promise(async (resolve, reject) => {
        if (!last(e?.target?.files)) {
            return;
        }

        try {
            if (pipe(last, isFileFormatValid)(e?.target?.files)) {
                e.preventDefault();
                throw new Error('Shit');
            }

            const img = await toBase64(last(e?.target?.files) as File);

            if (isUndefined(img)) {
                throw new Error('Something went wrong!');
            }

            resolve(img);
        } catch (error) {
            reject(error);
        }
    });
};

const isFileFormatValid = (file: File) => {
    if (negate(startsWith('image'))(file?.type)) {
        return true;
    }
    return false;
};
