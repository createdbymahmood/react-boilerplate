import { reduceRight } from 'lodash';

export function or(...fns: any[]) {
    return reduceRight(
        fns,
        function (truth, f) {
            return truth || f;
        },
        false,
    );
}
