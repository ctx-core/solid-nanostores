import { createSignal, onCleanup } from 'solid-js'
export function useSignal(atom) {
	const [state, setState] = createSignal(atom.get())
	const unsubscribe = atom.subscribe(newState=>setState(newState))
	onCleanup(()=>unsubscribe())
	return [state, atom.set]
}
