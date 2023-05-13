import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { StoreValue, WritableAtom } from 'nanostores'
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_
>():be_atom_memo_tuple5_T<A>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_
>(
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_
>():be_atom_memo_tuple5_T<A>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_
>(
	atom__new:(ctx:Ctx)=>A,
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A>
export declare function be_atom_memo_tuple5_<
	A extends WritableAtom = WritableAtom_
>(
	id:string|null|undefined,
	atom__new:((ctx:Ctx)=>A),
	be__params?:be__params_T
):be_atom_memo_tuple5_T<A>
export type be_atom_memo_tuple5_T<
	A extends WritableAtom = WritableAtom_
> = [
	Be<A>,
	(ctx:Ctx)=>StoreValue<A>,
	(ctx:Ctx, val:T)=>void,
	(ctx?:Ctx)=>()=>StoreValue<A>,
	(ctx?:Ctx)=>StoreValue<A>
]
