import { Link } from '@components';
import Text from '@components/Typography';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'services/theme/createTheme';

type Props = {
    isSticky: boolean;
};

const useStyles = makeStyles<Theme, Props>(theme => ({
    root: {
        background: theme.palette.common.black,
        color: theme.palette.common.white,
    },

    x: props => {
        console.log(props.isSticky);
        console.log(theme.typography);
        return {};
    },
}));

export const Index = () => {
    const cls = useStyles({ isSticky: true });

    return (
        <div className={cls.root}>
            <Text>Salam</Text>
            <Link to="Profile" params={{ userId: 'Salam' }}>
                Salam
            </Link>
        </div>
    );
};

export default Index;
