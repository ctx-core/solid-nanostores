import type { be_config_arg_a_T, WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__val__new_T, ctx__be_T, ctx__get_T, ctx__set_T, wide_ctx_T } from 'ctx-core/be'
import type { WritableAtom } from 'nanostores'
export declare function be_atom_memo_tuple5_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be: Be<atom_T, ns_T, ctx_T>):be_atom_memo_tuple5_T<val_T, ns_T, atom_T, ctx_T>
export declare function be_atom_memo_tuple5_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	atom__new:be__val__new_T<val_T, ns_T, ctx_T>,
	...config:be_config_arg_a_T<ns_T>
):be_atom_memo_tuple5_T<val_T, ns_T, atom_T, ctx_T>
export declare function id_be_atom_memo_tuple5_<
	val_T,
	ns_T extends '' = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<''> = wide_ctx_T<''>,
>(id:string, val__new:be__val__new_T<val_T, ns_T, ctx_T>):be_atom_memo_tuple5_T<val_T, ns_T, atom_T, ctx_T>
export declare function ns_be_atom_memo_tuple5_<
	val_T,
	ns_T extends string,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(ns:ns_T, val__new:be__val__new_T<val_T, ns_T, ctx_T>):be_atom_memo_tuple5_T<val_T, ns_T, atom_T, ctx_T>
export type be_atom_memo_tuple5_T<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = [
	ctx__be_T<atom_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	ctx__set_T<val_T, ns_T, ctx_T>,
	(ctx?:ctx_T)=>val_T,
	(ctx?:ctx_T)=>()=>val_T,
]
