export default function memoize(fn: Function) {
    const cache = {};

    return arg => {
        if (cache[arg] === undefined) {
            cache[arg] = fn(arg);
        }

        return cache[arg];
    };
}
