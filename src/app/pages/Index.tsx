import { Link } from '@components';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'services/theme/createTheme';
import withWidth, { WithWidthProps } from 'services/theme/withWidth';

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
        return {};
    },
}));

type IndexProps = WithWidthProps;

export const Index = withWidth()(({ width }: IndexProps) => {
    const cls = useStyles({ isSticky: true });

    return (
        <div className={cls.root}>
            <Link to="Profile" params={{ userId: 'Salam' }}>
                Salam
            </Link>
        </div>
    );
});
export default withWidth()(Index);
