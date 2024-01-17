import type { WritableAtom_ } from '@ctx-core/nanostores'
import type {
	Be,
	be__val__new_T,
	be_config_T,
	Ctx,
	ctx__be_T,
	ctx__get_T,
	ctx__set_T,
	Ctx_wide_T
} from 'ctx-core/be'
import type { WritableAtom } from 'nanostores'
export declare function be_atom_memo_tuple5_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(be: Be<atom_T, ns_T, ctx_T>):be_atom_memo_tuple5_T<val_T, ns_T, atom_T, ctx_T>
export declare function be_atom_memo_tuple5_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	atom__new:be__val__new_T<val_T, ns_T, ctx_T>,
	config?:be_config_T<ns_T>
):be_atom_memo_tuple5_T<val_T, ns_T, atom_T, ctx_T>
export type be_atom_memo_tuple5_T<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
> = [
	ctx__be_T<atom_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	ctx__set_T<val_T, ns_T, ctx_T>,
	(ctx?:ctx_T)=>val_T,
	(ctx?:ctx_T)=>()=>val_T,
]
