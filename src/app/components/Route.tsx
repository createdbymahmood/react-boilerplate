import { Route as RreactRouterRoute, RouteProps } from 'react-router-dom';

type Props = RouteProps;

export const Route = (props: Props) => {
    return <RreactRouterRoute {...props} />;
};
