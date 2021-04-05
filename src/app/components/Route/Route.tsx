/* components */
/* modules */
import { Route as ReactRouterRoute, RouteProps } from 'react-router-dom';
/* helpers */
/* assets */
/* services */
/* constants */
/* types */
type Props = RouteProps;

export const Route = (props: Props) => {
    return <ReactRouterRoute {...props} />;
};
