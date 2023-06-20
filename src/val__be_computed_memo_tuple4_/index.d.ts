import type { Autosubscribe, ReadableAtom_ } from '@ctx-core/nanostores'
import type { MapCtx } from '@ctx-core/object'
import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import { BoxAutosubscribe, UnboxAutosubscribe } from 'nanostores'
export declare function val__be_computed_memo_tuple4_<
	V,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:MapCtx, asub:Autosubscribe<V>)=>
		BoxAutosubscribe<V>|PromiseLike<BoxAutosubscribe<V>>,
	be__params?:be__params_T
):val__be_computed_memo_tuple4_T<UnboxAutosubscribe<Awaited<V>>, ctx_T>
export declare function val__be_computed_memo_tuple4_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	val__new:(ctx:MapCtx, asub:Autosubscribe<V>)=>
		BoxAutosubscribe<V>|PromiseLike<BoxAutosubscribe<V>>,
	be__params?:be__params_T
):val__be_computed_memo_tuple4_T<UnboxAutosubscribe<Awaited<V>>, ctx_T>
export type val__be_computed_memo_tuple4_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	Be<ReadableAtom_<V>, ctx_T>,
	(ctx:ctx_T, asub?:Autosubscribe)=>V,
	(ctx?:ctx_T)=>V,
	(ctx?:ctx_T)=>()=>V,
]
