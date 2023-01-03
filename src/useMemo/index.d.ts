import type { ReadableAtom, WritableAtom } from 'nanostores'
import type { ReadableAtom_, WritableAtom_ } from '@ctx-core/nanostores'
export function useMemo<Value>(atom:ReadableAtom<Value>):()=>Value
