import { be_atom_triple_ } from '@ctx-core/nanostores'
import { useMemo } from '../useMemo/index.js'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { be__memo_pair_ } from '../be__memo_pair_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_memo_tuple5_T}be_atom_memo_tuple5_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>WritableAtom)|be__params_T}[name_OR_atom__new_OR_be__params]
 * @param {((ctx:Ctx)=>WritableAtom)|be__params_T}[atom__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_atom_memo_tuple5_T}
 * @private
 */
export function be_atom_memo_tuple5_(
	name_OR_atom__new_OR_be__params,
	atom__new_OR_be__params,
	be__params
) {
	const be_atom_triple =
		be_atom_triple_(
			name_OR_atom__new_OR_be__params,
			atom__new_OR_be__params,
			be__params)
	const atom__be = be_atom_triple[0]
	return [
		...be_atom_triple,
		...be__memo_pair_(atom__be)
	]
}