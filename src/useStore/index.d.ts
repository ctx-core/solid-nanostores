import type { WritableAtom } from 'nanostores'
import type { Store } from 'solid-js/store'
export function useStore<Value extends {}>(atom:WritableAtom<Value>):[Store<Value>, (val:Value)=>void]
