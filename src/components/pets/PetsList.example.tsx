import React, { Fragment } from 'react';
import { Skeleton } from '@mui/material';
import { useListPets, useShowPetById } from 'api';
import { withQueryErrorBoundary, withSuspense } from 'components';
import { range } from 'lodash';
import { compose } from 'lodash/fp';

const PetsListBase: React.VFC = () => {
    useShowPetById('123');
    useListPets();

    return <div>Hi</div>;
};

const Loading = () => (
    <Fragment>
        {range(5).map(() => (
            <Skeleton height={50} key={Math.random()} />
        ))}
    </Fragment>
);

export const PetsList = compose(
    withSuspense(<Loading />),
    withQueryErrorBoundary(),
)(PetsListBase);
