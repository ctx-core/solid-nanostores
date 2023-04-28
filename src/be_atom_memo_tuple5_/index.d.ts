import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { WritableAtom } from 'nanostores'
export declare function be_atom_memo_tuple5_<
	T = any
>():be_atom_memo_tuple5_T<T, WritableAtom_<T>>
export declare function be_atom_memo_tuple5_<
	T = any
>(
	name:string|null|undefined
):be_atom_memo_tuple5_T<T, WritableAtom_<T>>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom<T>
>(
	atom__new:(ctx:Ctx)=>A
):be_atom_memo_tuple5_T<T, A>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom<T>
>(
	name?:string|null|undefined,
	atom__new?:((ctx:Ctx)=>A)
):be_atom_memo_tuple5_T<T, A>
export declare function be_atom_memo_tuple5_<
	T = any,
	A extends WritableAtom<T> = WritableAtom<T>
>(
	name_OR_atom__new?:string|null|undefined|((ctx:Ctx)=>T),
	atom__new?:((ctx:Ctx)=>A)
):be_atom_memo_tuple5_T<T, A>
export type be_atom_memo_tuple5_T<
	T = any,
	A extends WritableAtom<T> = WritableAtom<T>
> = [
	Be<A>,
	(ctx:Ctx)=>T,
	(ctx:Ctx, val:T)=>void,
	(ctx?:Ctx)=>()=>T,
	(ctx?:Ctx)=>T
]