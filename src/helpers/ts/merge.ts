import deepmerge from 'helpers/ts/deepmerge';

function merge(acc: object, item: object) {
    if (!item) {
        return acc;
    }

    return deepmerge(acc, item, {
        clone: false, // No need to clone deep, it's way faster.
    });
}

export default merge;
