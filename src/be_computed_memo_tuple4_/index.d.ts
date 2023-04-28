import type { Be, Ctx } from '@ctx-core/object'
import type { ReadableAtom } from 'nanostores'
export declare function be_computed_memo_tuple4_<
	T = any,
	C extends ReadableAtom<T> = ReadableAtom<T>
>(
	computed__new:(ctx:Ctx)=>C
):be_computed_memo_tuple4_T<T, C>
export declare function be_computed_memo_tuple4_<
	T = any,
	C extends ReadableAtom<T> = ReadableAtom<T>
>(
	name:string|null|undefined,
	computed__new:((ctx:Ctx)=>C)
):be_computed_memo_tuple4_T<T, C>
export declare function be_computed_memo_tuple4_<
	T = any,
	C extends ReadableAtom<T> = ReadableAtom<T>
>(
	...argv:[(ctx:Ctx)=>C]|[
		name:string|null|undefined,
		computed__new:((ctx:Ctx)=>C)
	]
):be_computed_memo_tuple4_T<T, C>
export type be_computed_memo_tuple4_T<
	T = any,
	C extends ReadableAtom<T> = ReadableAtom<T>
> = [
	Be<C>,
	(ctx:Ctx)=>T,
	(ctx?:Ctx)=>()=>T,
	(ctx?:Ctx)=>T
]
