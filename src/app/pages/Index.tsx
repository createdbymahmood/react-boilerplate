import { Link } from '@components';
import createTheme from 'services/theme/createTheme';

const theme = createTheme();

console.log(theme);

export default function Index() {
    return (
        <div>
            <Link to="Profile" params={{ userId: 'Salam' }}>
                Salam
            </Link>
        </div>
    );
}
