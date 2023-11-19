import { createSignal, getOwner, onCleanup } from 'solid-js'
/** @typedef {import('nanostores').ReadableAtom} */
const owner_MM_atom_M_signal = new WeakMap()
/**
 * @param {ReadableAtom}atom
 * @returns {[()=>unknown, (val:unknown)=>void]}
 */
export function useSignal(atom) {
	const owner = getOwner()
	if (!owner_MM_atom_M_signal.has(owner)) {
		owner_MM_atom_M_signal.set(owner, new WeakMap())
	}
	const atom_M_signal = owner_MM_atom_M_signal.get(owner)
	if (atom_M_signal.has(atom)) return atom_M_signal.get(atom)
	const [
		state,
		setState
	] = createSignal(atom.get())
	const unsubscribe = atom.subscribe(newState=>
		setState(newState))
	onCleanup(()=>{
		unsubscribe()
		atom_M_signal.delete(atom)
	})
	const signal = [state, atom.set]
	atom_M_signal.set(atom, signal)
	return signal
}
