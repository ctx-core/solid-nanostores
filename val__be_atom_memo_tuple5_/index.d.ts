import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import type { StoreValue, Task } from 'nanostores'
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
	val__new:(ctx:MapCtx)=>Task<V>|V,
	be__params?:be__params_T
):val__be_atom_memo_tuple5_T<V, ctx_T>
export declare function val__be_atom_memo_tuple5_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	val__new:(ctx:MapCtx)=>Task<V>|V,
	be__params?:be__params_T
):val__be_atom_memo_tuple5_T<V, ctx_T>
export type val__be_atom_memo_tuple5_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	Be<WritableAtom_<V>, ctx_T>,
	(ctx:ctx_T)=>V,
	(ctx:ctx_T, val:StoreValue<V>)=>void,
	(ctx?:ctx_T)=>V,
	(ctx?:ctx_T)=>()=>V,
]
