import { be_computed_pair_ } from '@ctx-core/nanostores'
import { be__memo_pair_ } from '../be__memo_pair_/index.js'
/** @typedef {import('@ctx-core/object').be__val__new_T} */
/** @typedef {import('./index.d.ts').be_computed_memo_tuple4_T} */
/**
 * @returns {be_computed_memo_tuple4_T}
 * @private
 */
export function be_computed_memo_tuple4_(...arg_a) {
	const be_computed_pair = be_computed_pair_(...arg_a)
	const computed__be = be_computed_pair[0]
	be_computed_pair.push(...be__memo_pair_(computed__be))
	return be_computed_pair
}
