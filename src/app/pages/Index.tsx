import { createRoute } from 'helpers/ts/createRoute';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <div>
            <Link to={createRoute('Index')}>INDEX ROUTE</Link>
        </div>
    );
}
