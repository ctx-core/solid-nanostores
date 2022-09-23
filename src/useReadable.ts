import { type ReadableAtom_, split_atom_ } from '@ctx-core/nanostores'
import { type Accessor, observable } from 'solid-js'
export function useReadable<T>(accessor:Accessor<T>):ReadableAtom_<T> {
	const [computed_, set] = split_atom_<T>()
	observable(accessor).subscribe($=>set($))
	return computed_
}
