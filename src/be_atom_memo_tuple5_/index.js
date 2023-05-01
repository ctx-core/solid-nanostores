/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_memo_tuple5_T}be_atom_memo_tuple5_T */
import { be_atom_triple_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { useMemo } from '../useMemo/index.js'
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
	const memo__new = ctx=>useMemo(atom__be(ctx))
	const memo__be =
		typeof name_OR_atom__new_OR_be__params === 'function'
		? be_(memo__new)
		: be_(`${name_OR_atom__new_OR_be__params}memo`, memo__new)
	const memo_ = (ctx = ctx__Context__use())=>
		memo__be(ctx)
	const memo = (ctx = ctx__Context__use())=>
		memo_(ctx)()
	return [
		...be_atom_triple,
		memo_,
		memo
	]
}