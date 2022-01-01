import { Sortable, SortableProps, GridContainer } from 'components';
import {
    arraySwap,
    rectSortingStrategy,
    rectSwappingStrategy,
} from '@dnd-kit/sortable';

const props: Partial<SortableProps> = {
    adjustScale: true,
    Container: (props: any) => <GridContainer {...props} columns={5} />,
    strategy: rectSortingStrategy,
    wrapperStyle: () => ({
        width: 140,
        height: 140,
    }),
};

export default function Home() {
    return (
        <Sortable
            {...props}

            /* activationConstraint={{
                delay: 250,
                tolerance: 5,
            }}
            strategy={rectSwappingStrategy}
            reorderItems={arraySwap}
            removable
            getNewIndex={({ id, items, activeIndex, overIndex }) =>
                arraySwap(items, activeIndex, overIndex).indexOf(id)
            } */
        />
    );
}
