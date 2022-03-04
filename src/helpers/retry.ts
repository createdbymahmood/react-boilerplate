export function retry<T>(
    fn: () => Promise<T>,
    retriesLeft = 5,
    interval = 1000,
): Promise<T> {
    return new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch(error => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        reject(error);
                        return;
                    }

                    // Passing on "reject" is the important part
                    retry(fn, retriesLeft - 1, interval).then(resolve, reject);
                }, interval);
            });
    });
}
