import { be_atom_triple_ } from '@ctx-core/nanostores'
import { be__memo_pair_ } from '../be__memo_pair/index.js'
/** @typedef {import('./index.d.ts').be_atom_memo_tuple5_T} */
/**
 * @returns {be_atom_memo_tuple5_T}
 * @private
 */
export function be_atom_memo_tuple5_(...arg_a) {
	const be_atom_triple =
		be_atom_triple_(...arg_a)
	const atom__be = be_atom_triple[0]
	be_atom_triple.push(...be__memo_pair_(atom__be))
	return be_atom_triple
}
/**
 * @param {string}id
 * @param {be__val__new_T}val__new
 * @returns {be_atom_memo_tuple5_T}
 * @private
 */
export function id_be_atom_memo_tuple5_(id, val__new) {
	return be_atom_memo_tuple5_(val__new, { id })
}
/**
 * @param {string}ns
 * @param {be__val__new_T}val__new
 * @returns {be_atom_memo_tuple5_T}
 * @private
 */
export function ns_be_atom_memo_tuple5_(ns, val__new) {
	return be_atom_memo_tuple5_(val__new, { ns })
}
