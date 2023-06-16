import type { Autosubscribe } from '@ctx-core/nanostores'
import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { ReadableAtom, StoreValue } from 'nanostores'
export declare function be_computed_memo_tuple4_<
	C extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	computed__new:(ctx:ctx_T)=>C,
	be__params?:be__params_T
):be_computed_memo_tuple4_T<C, ctx_T>
export declare function be_computed_memo_tuple4_<
	C extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	computed__new:((ctx:ctx_T)=>C),
	be__params?:be__params_T
):be_computed_memo_tuple4_T<C, ctx_T>
export type be_computed_memo_tuple4_T<
	C extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
> = [
	Be<C, ctx_T>,
	(ctx:ctx_T, asub?:Autosubscribe<StoreValue<C>>)=>StoreValue<C>,
	(ctx?:ctx_T)=>StoreValue<C>,
	(ctx?:ctx_T)=>()=>StoreValue<C>,
]
