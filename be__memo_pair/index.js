/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { ctx__Context__use } from '@ctx-core/solid-js'
import { useMemo } from '../useMemo/index.js'
/** @typedef {import('nanostores').ReadableAtom} */
/**
 * @param {Be<ReadableAtom>}atom__be
 * @returns {be__memo_pair_T}
 * @private
 */
export function be__memo_pair_(atom__be) {
	return [
		(ctx = ctx__Context__use())=>{
			try {
				return useMemo(atom__be(ctx))()
			} catch (err) {
				throw new Error(`be__memo_pair_|memo|error|id|${atom__be.id}`, { cause: err })
			}
		},
		(ctx = ctx__Context__use())=>{
			try {
				return useMemo(atom__be(ctx))
			} catch (err) {
				throw new Error(`be__memo_pair_|memo_|error|id|${atom__be.id}`, { cause: err })
			}
		},
	]
}
