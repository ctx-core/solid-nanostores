import type { Autosubscribe, WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { StoreValue, WritableAtom } from 'nanostores'
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_,
	ctx_T extends Ctx = Ctx
>():be_atom_memo_tuple5_T<A, ctx_T>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A, ctx_T>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_,
	ctx_T extends Ctx = Ctx
>():be_atom_memo_tuple5_T<A, ctx_T>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A, ctx_T>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_,
	ctx_T extends Ctx = Ctx
>(
	atom__new:(ctx:ctx_T)=>A,
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A, ctx_T>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	atom__new:((ctx:ctx_T)=>A),
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A, ctx_T>
export type be_atom_memo_tuple5_T<
	A extends WritableAtom = WritableAtom_,
	ctx_T extends Ctx = Ctx
> = [
	Be<A, ctx_T>,
	(ctx:ctx_T, al?:Autosubscribe<StoreValue<A>>)=>StoreValue<A>,
	(ctx:ctx_T, val:T)=>void,
	(ctx?:ctx_T)=>StoreValue<A>,
	(ctx?:ctx_T)=>()=>StoreValue<A>,
]
