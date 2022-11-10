import { split_atom_ } from '@ctx-core/nanostores'
import { observable } from 'solid-js'
export function useReadable(accessor) {
	const [computed_, set] = split_atom_()
	observable(accessor).subscribe($=>set($))
	return computed_
}
