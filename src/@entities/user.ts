export type Model = {
    name: string;
    family: string;
    age: number;
};

export type LoginPayload = {
    username: string;
    password: string;
};

export type LoginMutationContext = {
    rollback: () => void;
};
