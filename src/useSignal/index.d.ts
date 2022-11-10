import type { WritableAtom } from 'nanostores'
export function useSignal<Value>(atom:WritableAtom<Value>):[()=>Value, (val:Value)=>void]
