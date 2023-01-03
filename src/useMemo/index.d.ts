import type { ReadableAtom, WritableAtom } from 'nanostores'
export function useMemo<Value>(atom:ReadableAtom<Value>|WritableAtom<Value>):()=>Value
