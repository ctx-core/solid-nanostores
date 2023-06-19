import type { Autosubscribe, WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__params_T, Ctx, MapCtx } from '@ctx-core/object'
export declare function val__be_atom_memo_tuple5_<
	V,
	ctx_T extends Ctx = Ctx
>():val__be_atom_memo_tuple5_T<V, ctx_T>
export declare function val__be_atom_memo_tuple5_<
	V,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):val__be_atom_memo_tuple5_T<V, ctx_T>
export declare function val__be_atom_memo_tuple5_<
	V,
	ctx_T extends Ctx = Ctx
>():val__be_atom_memo_tuple5_T<V, ctx_T>
export declare function val__be_atom_memo_tuple5_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):val__be_atom_memo_tuple5_T<V, ctx_T>
export declare function val__be_atom_memo_tuple5_<
	V,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:MapCtx)=>V|PromiseLike<V>,
	be__params?:be__params_T
):val__be_atom_memo_tuple5_T<Awaited<V>, ctx_T>
export declare function val__be_atom_memo_tuple5_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	val__new:((ctx:MapCtx)=>V|PromiseLike<V>),
	be__params?:be__params_T
):val__be_atom_memo_tuple5_T<Awaited<V>, ctx_T>
export type val__be_atom_memo_tuple5_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	Be<WritableAtom_<V>, ctx_T>,
	(ctx:ctx_T, asub?:Autosubscribe)=>V,
	(ctx:ctx_T, val:T)=>void,
	(ctx?:ctx_T)=>V,
	(ctx?:ctx_T)=>()=>V,
]
