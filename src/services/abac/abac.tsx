import React, { ComponentProps, createContext, FC } from 'react';
import { Ability, defineAbility } from '@casl/ability';
import { createCanBoundTo, useAbility } from '@casl/react';
import { Navigate } from 'react-router-dom';

export type Type = Ability<[Actions, Subjects]>;

export const AbilityContext = createContext<Type>({} as Type);

type Actions = 'view';
type Subjects = 'Home';

export const ability = defineAbility<Type>((can, cannot) => {
    can('view', 'Home');
});

export const Can = createCanBoundTo(ability);

export const RouterCan: FC<ComponentProps<typeof Can> & { to }> = ({
    children,
    to,
    ...props
}) => (
    <Can {...props} passThrough>
        {ability => (ability ? children : <Navigate replace to={to} />)}
    </Can>
);

const useAbilityContext = () => useAbility(AbilityContext);
