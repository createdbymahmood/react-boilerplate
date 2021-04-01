import { Route as ReactRouterRoute, RouteProps } from 'react-router-dom';

type Props = RouteProps;

export const Route = (props: Props) => {
    return <ReactRouterRoute {...props} />;
};
