import { val__be_atom_triple_ } from '@ctx-core/nanostores'
import { be__memo_pair_ } from '../be__memo_pair_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').be_atom_memo_tuple5_T}be_atom_memo_tuple5_T */
/**
 o* @param {string|null|undefined|((ctx:Ctx)=>any)|be__params_T}[id_OR_val_new_OR_be__params]
 * @param {((ctx:Ctx)=>any)|be__params_T}[val__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_atom_memo_tuple5_T}
 * @private
 */
export function val__be_atom_memo_tuple5_(
	id_OR_val__new_OR_be__params,
	val__new_OR_be__params,
	be__params
) {
	const be_atom_triple =
		val__be_atom_triple_(
			id_OR_val__new_OR_be__params,
			val__new_OR_be__params,
			be__params)
	const atom__be = be_atom_triple[0]
	return [
		...be_atom_triple,
		...be__memo_pair_(atom__be)
	]
}
