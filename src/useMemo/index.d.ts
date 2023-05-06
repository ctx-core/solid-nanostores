import type { ReadableAtom } from 'nanostores'
export function useMemo<
	Value
>(atom:ReadableAtom<Value>):()=>Value
