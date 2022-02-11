import generatePath, { ParamMap } from 'urlcat';
import { Path } from 'types/global';
import { paths } from 'constants/paths';
import { get } from 'lodash';

export const createRoute = (
    path: Path<typeof paths>,
    params: ParamMap = {},
) => {
    return generatePath(get(paths, path), params);
};
