import { type WritableAtom } from 'nanostores'
import { onCleanup } from 'solid-js'
import { createStore, reconcile, Store } from 'solid-js/store'
export function useStore<Value extends {}>(atom:WritableAtom<Value>):[Store<Value>, (val:Value)=>void] {
	const [state, setState] = createStore<Value>(atom.get())
	const unsubscribe = atom.subscribe(newState=>{
		setState(reconcile(newState))
	})
	onCleanup(()=>unsubscribe())
	return [state, atom.set]
}
