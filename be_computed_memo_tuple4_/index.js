/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { be__memo_pair_ } from '../be__memo_pair_/index.js'
/**
 * @returns {be_computed_memo_tuple4_T}
 * @private
 */
export function be_computed_memo_tuple4_(...arg_a) {
	const be_computed_pair =
		be_computed_pair_(...arg_a)
	const computed__be =
		be_computed_pair[0]
	be_computed_pair.push(...be__memo_pair_(computed__be))
	return be_computed_pair
}
