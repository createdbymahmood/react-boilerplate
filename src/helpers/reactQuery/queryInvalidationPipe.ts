import _ from 'lodash/fp';
import { queryClient } from 'services/reactQuery';

const invalidator = _.pipe(
    _.uniq,
    _.map<string, void>(i => queryClient.invalidateQueries(i)),
);

export function queryInvalidationPipe(...args: string[]): void {
    invalidator(args);
}
