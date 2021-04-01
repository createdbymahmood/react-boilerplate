import { reduceRight } from 'lodash';

export function and(...conditions: any[]) {
    return reduceRight(
        conditions,
        function (truth, c) {
            return truth && c;
        },
        true,
    );
}
