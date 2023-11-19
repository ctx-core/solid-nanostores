import { createMemo, createSignal, getOwner, onCleanup } from 'solid-js'
/** @typedef {import('nanostores').ReadableAtom} */
const owner_MM_atom_M_memo = new WeakMap()
/**
 * @param atom
 * @returns {Accessor<unknown>|*}
 */
export function useMemo(atom) {
	const owner = getOwner()
	if (!owner_MM_atom_M_memo.has(owner)) {
		owner_MM_atom_M_memo.set(owner, new WeakMap())
	}
	const atom_M_memo = owner_MM_atom_M_memo.get(owner)
	if (atom_M_memo.has(atom)) return atom_M_memo.get(atom)
	const [
		get,
		set
	] = createSignal()
	const unsubscribe = atom.subscribe(val=>set(val))
	onCleanup(()=>{
		unsubscribe()
		owner_MM_atom_M_memo.delete(owner)
	})
	let first_time = true
	const memo = createMemo(()=>{
		if (first_time) {
			first_time = false
			set(atom.get())
		}
		return get()
	})
	atom_M_memo.set(atom, memo)
	return memo
}
