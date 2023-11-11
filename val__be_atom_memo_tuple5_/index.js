import { val__be_atom_triple_ } from '@ctx-core/nanostores'
import { be__memo_pair_ } from '../be__memo_pair_/index.js'
/** @typedef {import('../be_atom_memo_tuple5_').be_atom_memo_tuple5_T}be_atom_memo_tuple5_T */
/**
 * @returns {be_atom_memo_tuple5_T}
 * @private
 */
export function val__be_atom_memo_tuple5_(...arg_a) {
	const be_atom_triple = val__be_atom_triple_(...arg_a)
	const atom__be = be_atom_triple[0]
	return [
		...be_atom_triple,
		...be__memo_pair_(atom__be)
	]
}
