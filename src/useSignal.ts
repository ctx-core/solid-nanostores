import { type WritableAtom } from 'nanostores'
import { createSignal, onCleanup } from 'solid-js'
export function useSignal<Value>(atom:WritableAtom<Value>):[()=>Value, (val:Value)=>void] {
	const [state, setState] = createSignal<Value>(atom.get())
	const unsubscribe = atom.subscribe(newState=>{
		setState(newState as any)
	})
	onCleanup(()=>unsubscribe())
	return [state, atom.set]
}
