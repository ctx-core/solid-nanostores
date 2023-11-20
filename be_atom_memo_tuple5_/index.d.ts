import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__val__new_T, be_config_T, Ctx } from '@ctx-core/object'
import type { WritableAtom } from 'nanostores'
export declare function be_atom_memo_tuple5_<
	val_T,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
>(be: Be<atom_T, ctx_T>):be_atom_memo_tuple5_T<val_T, atom_T, ctx_T>
export declare function be_atom_memo_tuple5_<
	val_T,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
>(atom__new:be__val__new_T<val_T>, config?:be_config_T):be_atom_memo_tuple5_T<val_T, atom_T, ctx_T>
export type be_atom_memo_tuple5_T<
	val_T,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<atom_T, ctx_T>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:val_T)=>void,
	(ctx?:ctx_T)=>val_T,
	(ctx?:ctx_T)=>()=>val_T,
]
