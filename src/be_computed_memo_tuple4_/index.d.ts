import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { ReadableAtom, StoreValue } from 'nanostores'
export declare function be_computed_memo_tuple4_<
	C extends ReadableAtom = ReadableAtom_
>(
	computed__new:(ctx:Ctx)=>C,
	be__params?:be__params_T
):be_computed_memo_tuple4_T<C>
export declare function be_computed_memo_tuple4_<
	C extends ReadableAtom = ReadableAtom_
>(
	id:string|null|undefined,
	computed__new:((ctx:Ctx)=>C),
	be__params?:be__params_T
):be_computed_memo_tuple4_T<C>
export type be_computed_memo_tuple4_T<
	C extends ReadableAtom = ReadableAtom_
> = [
	Be<C>,
	(ctx:Ctx)=>StoreValue<C>,
	(ctx?:Ctx)=>()=>StoreValue<C>,
	(ctx?:Ctx)=>StoreValue<C>
]
