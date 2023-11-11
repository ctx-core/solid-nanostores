import { onCleanup } from 'solid-js'
import { createStore, reconcile } from 'solid-js/store'
export function useStore(atom) {
	const [state, setState] = createStore(atom.get())
	const unsubscribe = atom.subscribe(newState=>setState(reconcile(newState)))
	onCleanup(()=>unsubscribe())
	return [state, atom.set]
}
