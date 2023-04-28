import { createMemo, createSignal, onCleanup } from 'solid-js'
export function useMemo(atom) {
	const [
		get,
		set
	] = createSignal()
	const unsubscribe = atom.subscribe(val=>set(val))
	onCleanup(()=>unsubscribe())
	let first_time = true
	return createMemo(()=>{
		if (first_time) {
			first_time = false
			set(atom.get())
		}
		return get()
	})
}
