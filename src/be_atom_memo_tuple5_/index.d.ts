import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { WritableAtom } from 'nanostores'
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom_<T>
>():be_atom_memo_tuple5_T<T, A>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom_<T>
>(
	be__params?:be__params_T
):be_atom_memo_tuple5_T<T, A>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom_<T>
>():be_atom_memo_tuple5_T<T, A>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom_<T>
>(
	name:string|null|undefined,
	be__params?:be__params_T
):be_atom_memo_tuple5_T<T, A>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom_<T>
>(
	atom__new:(ctx:Ctx)=>A,
	be__params?:be__params_T
):be_atom_memo_tuple5_T<T, A>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom_<T>
>(
	name?:string|null|undefined,
	atom__new?:((ctx:Ctx)=>A),
	be__params?:be__params_T
):be_atom_memo_tuple5_T<T, A>
export type be_atom_memo_tuple5_T<
	T = any,
	A extends WritableAtom<T> = WritableAtom_<T>
> = [
	Be<A>,
	(ctx:Ctx)=>T,
	(ctx:Ctx, val:T)=>void,
	(ctx?:Ctx)=>()=>T,
	(ctx?:Ctx)=>T
]