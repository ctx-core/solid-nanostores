/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_memo_tuple5_T}be_atom_memo_tuple5_T */
import { be_atom_triple_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { useMemo } from '../useMemo/index.js'
/**
 * @param {string|null|undefined|((ctx:Ctx)=>WritableAtom)}[name_OR_atom__new]
 * @param {(ctx:Ctx)=>WritableAtom}[atom__new]
 * @returns {be_atom_memo_tuple5_T}
 * @private
 */
export function be_atom_memo_tuple5_(
	name_OR_atom__new,
	atom__new
) {
	const be_atom_triple =
		be_atom_triple_(
			name_OR_atom__new,
			atom__new)
	const atom__be = be_atom_triple[0]
	const memo__new = ctx=>useMemo(atom__be(ctx))
	const memo__be =
		typeof name_OR_atom__new === 'function'
		? be_(memo__new)
		: be_(`${name_OR_atom__new}memo`, memo__new)
	const memo_ = (ctx = ctx__Context__use())=>
		memo__be(ctx)
	const memo =
		(ctx = ctx__Context__use())=>
			memo_(ctx)()
	return [
		...be_atom_triple,
		memo_,
		memo
	]
}