/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('./index.d.ts').be__memo_pair_T}be__memo_pair_T */
import { ctx__Context__use } from '@ctx-core/solid-js'
import { useMemo } from '../useMemo/index.js'
/**
 * @param {Be<ReadableAtom>}atom__be
 * @returns {be__memo_pair_T}
 * @private
 */
export function be__memo_pair_(atom__be) {
	return [
		(ctx = ctx__Context__use())=>
			useMemo(atom__be(ctx)),
		(ctx = ctx__Context__use())=>
			useMemo(atom__be(ctx))()
	]
}