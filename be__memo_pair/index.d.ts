import type { Be, wide_ctx_T } from 'ctx-core/be'
import type { ReadableAtom } from 'nanostores'
export declare function be__memo_pair_<
	T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	atom__be:Be<ReadableAtom<T>, ns_T, ctx_T>
):be__memo_pair_T<T, ns_T, ctx_T>
export type be__memo_pair_T<
	T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = [
	(ctx?:ctx_T)=>T,
	(ctx?:ctx_T)=>()=>T,
]
