import type { Be, Ctx } from '@ctx-core/object'
import type { ReadableAtom } from 'nanostores'
export declare function be__memo_pair_<T>(
	atom__be:Be<ReadableAtom<T>>
):be__memo_pair_T<T>
export type be__memo_pair_T<T> = [
	(ctx?:Ctx)=>()=>T,
	(ctx?:Ctx)=>T
]