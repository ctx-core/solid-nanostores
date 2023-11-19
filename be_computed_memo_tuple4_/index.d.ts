import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__config_params_T, be__val__new_T, Ctx } from '@ctx-core/object'
import type { ReadableAtom } from 'nanostores'
export declare function be_computed_memo_tuple4_<
	val_T,
	atom_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
>(computed__new:be__val__new_T<val_T>):be_computed_memo_tuple4_T<val_T, atom_T, ctx_T>
export type be_computed_memo_tuple4_T<
	val_T,
	atom_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<atom_T, ctx_T>,
	(ctx:ctx_T)=>val_T,
	(ctx?:ctx_T)=>val_T,
	(ctx?:ctx_T)=>()=>val_T,
]&{
	config:(params:be__config_params_T)=>be_computed_memo_tuple4_T<val_T, atom_T, ctx_T>
	oninit:(fn:(ctx:Ctx, atom:atom_T)=>unknown)=>be_computed_memo_tuple4_T<val_T, atom_T, ctx_T>
}
