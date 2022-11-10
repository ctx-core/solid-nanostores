import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Accessor } from 'solid-js'
export function useReadable<T>(accessor:Accessor<T>):ReadableAtom_<T>
