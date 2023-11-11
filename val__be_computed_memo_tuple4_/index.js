import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { be__memo_pair_ } from '../be__memo_pair_/index.js'
/** @typedef {import('../be_computed_memo_tuple4_').be_computed_memo_tuple4_T}be_computed_memo_tuple4_T */
/**
 * @returns {be_computed_memo_tuple4_T}
 * @private
 */
export function val__be_computed_memo_tuple4_(...arg_a) {
	const be_computed_pair = val__be_computed_pair_(...arg_a)
	const computed__be = be_computed_pair[0]
	return [
		...be_computed_pair,
		...be__memo_pair_(computed__be)
	]
}
