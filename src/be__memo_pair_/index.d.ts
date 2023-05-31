import type { Be, Ctx } from '@ctx-core/object'
import type { ReadableAtom } from 'nanostores'
export declare function be__memo_pair_<
	T,
	ctx_T extends Ctx = Ctx
>(
	atom__be:Be<ReadableAtom<T>, ctx_T>
):be__memo_pair_T<T, ctx_T>
export type be__memo_pair_T<
	T,
	ctx_T extends Ctx = Ctx
> = [
	(ctx?:ctx_T)=>()=>T,
	(ctx?:ctx_T)=>T
]
