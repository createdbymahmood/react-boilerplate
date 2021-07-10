import { Link } from '@components';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'services/theme/createTheme';

type Props = {
    isSticky: boolean;
};
const generateId = () => Math.random().toString(36).substring(7);

const useStyles = makeStyles<Theme, Props>(
    theme => ({
        root: {
            background: theme.palette.common.black,
            color: theme.palette.common.white,
        },

        x: props => {
            console.log(props.isSticky);
            console.log(theme.typography);
            return {};
        },
    }),
    { classNamePrefix: 'Salam', generateId },
);

export const Index = () => {
    const cls = useStyles({ isSticky: true });

    return (
        <div className={cls.root}>
            <Link to="Profile" params={{ userId: 'Salam' }}>
                Salam
            </Link>
        </div>
    );
};

export default Index;
