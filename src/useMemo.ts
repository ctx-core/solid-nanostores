import { type ReadableAtom } from 'nanostores'
import { type Accessor, createSignal, onCleanup } from 'solid-js'
export function useMemo<Value>(atom:ReadableAtom<Value>):()=>Value {
	const [get, set] = createSignal<Value>(atom.get())
	const unsubscribe = atom.subscribe(($:any)=>set($))
	onCleanup(()=>unsubscribe())
	return get as Accessor<Value>
}
