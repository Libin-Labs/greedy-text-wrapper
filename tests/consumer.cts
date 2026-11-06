import * as api from '@lp-labs/greedy-text-wrapper';
import { wrapText } from '@lp-labs/greedy-text-wrapper';
console.log(wrapText('small words fit neatly', 10));
// @ts-expect-error invalid argument must be rejected by declarations
api.wrapText('hello', 'wide');
