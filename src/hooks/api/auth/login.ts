export const login = () =>
    new Promise(res =>
        setTimeout(() => {
            res(true);
        }, 10),
    );
