import { Link } from '@components';

export default function Index() {
    return (
        <div>
            <Link to="Profile" params={{ userId: 'Salam' }}>
                Salam
            </Link>
        </div>
    );
}
