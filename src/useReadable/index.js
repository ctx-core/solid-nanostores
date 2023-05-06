import { atom_pair_ } from '@ctx-core/nanostores'
import { observable } from 'solid-js'
export function useReadable(accessor) {
	const [
		computed_,
		set
	] = atom_pair_()
	observable(accessor).subscribe($=>set($))
	return computed_
}
