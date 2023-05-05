import { be_computed_pair_ } from '@ctx-core/nanostores'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { useMemo } from '../useMemo/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('./index.d.ts').be_computed_memo_tuple4_T}be_computed_memo_tuple4_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>ReadableAtom)}[name_OR_computed__new]
 * @param {((ctx:Ctx)=>ReadableAtom)|be__params_T}[computed__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_computed_memo_tuple4_T}
 * @private
 */
export function be_computed_memo_tuple4_(
	name_OR_computed__new,
	computed__new_OR_be__params,
	be__params
) {
	const be_computed_pair =
		be_computed_pair_(
			name_OR_computed__new,
			computed__new_OR_be__params,
			be__params)
	const computed__be = be_computed_pair[0]
	return [
		...be_computed_pair,
		(ctx = ctx__Context__use())=>
			useMemo(computed__be(ctx)),
		(ctx = ctx__Context__use())=>
			useMemo(computed__be(ctx))()
	]
}