import generatePath, { ParamMap } from 'urlcat';
import { Path } from 'types/global';
import { paths } from 'constants/paths';

export const createRoute = (
    path: Path<typeof paths>,
    params: ParamMap = {},
) => {
    return generatePath(path, params);
};
